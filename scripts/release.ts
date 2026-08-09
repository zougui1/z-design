#!/usr/bin/env node
// Bumps the package version.
//
// Adapted from the lair's script, which mirrors one version across a workspace.
// This repo publishes a single package, so there is exactly one file to write —
// but the bump arithmetic, the prerelease rules and the refusal to touch a
// "version" key that is not the top-level one are worth keeping identical, so a
// release behaves the same wherever it is cut.
//
// There is no tag step and no release PR. .github/workflows/publish.yml runs on
// every push to main, compares the manifest version against the registry, and
// publishes only when it is new — so bumping and pushing *is* the release, and
// re-running a push that changed nothing is a no-op rather than a duplicate.
//
//   pnpm release patch
//   pnpm release minor --prerelease=beta
//   pnpm release major --alpha
//
// Prerelease rules, given the bump lands on the same base as the current
// prerelease and keeps the same identifier, the counter advances; otherwise a
// new prerelease line starts at .1. Bumping without --prerelease off a
// prerelease finalises it.
//
//   1.0.0        + patch --alpha  ->  1.0.1-alpha.1
//   1.0.1-alpha.1 + patch --alpha ->  1.0.1-alpha.2
//   1.0.1-alpha.1 + patch --beta  ->  1.0.1-beta.1
//   1.0.1-alpha.1 + minor --beta  ->  1.1.0-beta.1
//   1.0.1-alpha.2 + patch         ->  1.0.1
//
// A prerelease publishes under its own dist-tag rather than `latest` — that
// rule lives in publish.yml, which reads the identifier back out of the version
// this script writes.
//
// Run with plain `node scripts/release.ts` — type stripping, so no `enum`, no
// namespaces and no parameter properties.

import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BUMPS = ['major', 'minor', 'patch'] as const;
const PRERELEASE_IDS = ['alpha', 'beta'] as const;
const VERSION_RE = /^(\d+)\.(\d+)\.(\d+)(?:-([a-z]+)\.(\d+))?$/;

type Bump = (typeof BUMPS)[number];
type PrereleaseId = (typeof PRERELEASE_IDS)[number];

interface Options {
  bump: Bump;
  preid: PrereleaseId | undefined;
  dryRun: boolean;
  commit: boolean;
}

/** A parsed version. `precount` is 0 when there is no prerelease. */
interface Version {
  major: number;
  minor: number;
  patch: number;
  preid: string | undefined;
  precount: number;
}

/** The stable part of a version, the target a bump lands on. */
type Base = Pick<Version, 'major' | 'minor' | 'patch'>;

const isBump = (value: string): value is Bump => (BUMPS as readonly string[]).includes(value);

const isPrereleaseId = (value: string | undefined): value is PrereleaseId =>
  value !== undefined && (PRERELEASE_IDS as readonly string[]).includes(value);

const usage = `Usage: pnpm release <major|minor|patch> [--prerelease=<alpha|beta>] [options]

  --prerelease=<id>  Cut a prerelease. --alpha / --beta are shorthands.
  --dry-run          Print what would change, write nothing.
  --commit           Commit the bump as "release v<version>".
`;

// A declaration rather than a const arrow: only a declared `never` return
// narrows the caller's control flow, which is what lets `die` stand in for an
// early return below.
function die(message: string): never {
  console.error(`release: ${message}\n\n${usage}`);
  process.exit(1);
}

// ---------------------------------------------------------------- arguments

const parseArgs = (argv: string[]): Options => {
  let bump: Bump | undefined;
  let preid: PrereleaseId | undefined;
  let dryRun = false;
  let commit = false;

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i] as string;

    if (arg === '--dry-run') {
      dryRun = true;
    } else if (arg === '--commit') {
      commit = true;
    } else if (arg === '--help' || arg === '-h') {
      console.log(usage);
      process.exit(0);
    } else if (arg === '--prerelease' || arg.startsWith('--prerelease=')) {
      // Both `--prerelease beta` and `--prerelease=beta`.
      const value = arg.includes('=') ? arg.slice(arg.indexOf('=') + 1) : argv[++i];

      if (!isPrereleaseId(value)) {
        die(`unknown prerelease identifier ${JSON.stringify(value ?? '')}, expected ${PRERELEASE_IDS.join(' or ')}`);
      }

      preid = value;
    } else if (arg.startsWith('--') && isPrereleaseId(arg.slice(2))) {
      preid = arg.slice(2) as PrereleaseId;
    } else if (isBump(arg)) {
      if (bump) die(`two bumps given: ${bump} and ${arg}`);
      bump = arg;
    } else {
      die(`unknown argument ${JSON.stringify(arg)}`);
    }
  }

  if (!bump) die(`missing bump, expected one of ${BUMPS.join(', ')}`);

  return { bump, preid, dryRun, commit };
};

// ------------------------------------------------------------------ version

const parseVersion = (version: string): Version => {
  const match = VERSION_RE.exec(version);
  if (!match) die(`cannot parse current version ${JSON.stringify(version)}`);

  const precount = match[5];

  return {
    major: Number(match[1]),
    minor: Number(match[2]),
    patch: Number(match[3]),
    preid: match[4],
    precount: precount === undefined ? 0 : Number(precount),
  };
};

// Semver's own rule: a prerelease is already "on the way to" its own base, so
// major.minor.patch is reached by dropping the tag rather than bumping past it.
const applyBump = (current: Version, bump: Bump): Base => {
  const isPrerelease = current.preid !== undefined;

  if (bump === 'major') {
    if (isPrerelease && current.minor === 0 && current.patch === 0) {
      return { major: current.major, minor: 0, patch: 0 };
    }
    return { major: current.major + 1, minor: 0, patch: 0 };
  }

  if (bump === 'minor') {
    if (isPrerelease && current.patch === 0) {
      return { major: current.major, minor: current.minor, patch: 0 };
    }
    return { major: current.major, minor: current.minor + 1, patch: 0 };
  }

  if (isPrerelease) {
    return { major: current.major, minor: current.minor, patch: current.patch };
  }

  return { major: current.major, minor: current.minor, patch: current.patch + 1 };
};

const nextVersion = (currentVersion: string, bump: Bump, preid: PrereleaseId | undefined): string => {
  const current = parseVersion(currentVersion);
  const base = applyBump(current, bump);
  const stable = `${base.major}.${base.minor}.${base.patch}`;

  if (!preid) return stable;

  const continues =
    current.preid === preid &&
    current.major === base.major &&
    current.minor === base.minor &&
    current.patch === base.patch;

  return `${stable}-${preid}.${continues ? current.precount + 1 : 1}`;
};

// -------------------------------------------------------------------- files

/**
 * One package, so one file. Kept as a list anyway to stay shaped like the lair's
 * version, which walks `apps/*` — a repo that grows a second manifest should be
 * able to add it here rather than restructure the script.
 */
const targets = (): string[] => ['package.json'];

const readVersion = (file: string): string => {
  const manifest: unknown = JSON.parse(readFileSync(path.join(ROOT, file), 'utf8'));

  if (typeof manifest !== 'object' || manifest === null || !('version' in manifest)) {
    die(`${file} has no "version" field`);
  }

  const { version } = manifest;
  if (typeof version !== 'string') die(`${file} has a non-string "version"`);

  return version;
};

// Rewritten with a regex rather than JSON.stringify so formatting, key order
// and trailing newline survive untouched. The guard below makes sure the first
// "version" in the file really is the top-level one.
const writeVersion = (file: string, version: string): void => {
  const absolute = path.join(ROOT, file);
  const source = readFileSync(absolute, 'utf8');
  const current = readVersion(file);
  const match = /"version"\s*:\s*"([^"]*)"/.exec(source);

  if (!match || match[1] !== current) {
    die(`${file}: refusing to edit, the first "version" key is not the top-level one`);
  }

  writeFileSync(absolute, `${source.slice(0, match.index)}"version": "${version}"${source.slice(match.index + match[0].length)}`);
};

// --------------------------------------------------------------------- main

const options = parseArgs(process.argv.slice(2));
const files = targets();
const current = readVersion('package.json');
const version = nextVersion(current, options.bump, options.preid);

console.log(`${current} -> ${version}\n`);

for (const file of files) {
  const from = readVersion(file);
  console.log(`  ${file}${from === current ? '' : ` (was ${from}, out of sync)`}`);
  if (!options.dryRun) writeVersion(file, version);
}

if (options.dryRun) {
  console.log('\ndry run, nothing written');
  process.exit(0);
}

if (options.commit) {
  execFileSync('git', ['add', '--', ...files], { cwd: ROOT, stdio: 'inherit' });
  execFileSync('git', ['commit', '-m', `release v${version}`], { cwd: ROOT, stdio: 'inherit' });
  console.log('\ncommitted. push to main to publish.');
} else {
  console.log(`\ncommit and push to main to publish:\n  git commit -am "release v${version}"`);
}

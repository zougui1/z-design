/**
 * Canonical list of deploy targets — the single source of truth reused by the
 * badge and by each app's env schema. Kept free of React/asset imports so it is
 * safe to import from `env.js` (which Next loads as plain ESM at config time).
 */
export const deployTargetValues = [
  "server",
  "raspberry-pi",
  "localhost",
] as const;

export type DeployTarget = (typeof deployTargetValues)[number];

/** Text rendered in the badge for each target. */
export const deployTargetLabels: Record<DeployTarget, string> = {
  server: "Server",
  "raspberry-pi": "Raspberry Pi",
  localhost: "Localhost",
};

export const isDeployTarget = (value: unknown): value is DeployTarget =>
  typeof value === "string" &&
  (deployTargetValues as readonly string[]).includes(value);

/**
 * Narrows a raw env-var value to a {@link DeployTarget}, or `undefined` when it
 * is missing/unrecognized.
 */
export const parseDeployTarget = (
  value: string | undefined | null,
): DeployTarget | undefined => (isDeployTarget(value) ? value : undefined);

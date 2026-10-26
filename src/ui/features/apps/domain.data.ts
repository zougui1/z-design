/** Domain every app of the suite is served under: `{app}.zougui.com`. */
export const rootDomain = "zougui.com";

/**
 * Which machine a hostname routes to. `auto` is the bare `{app}.zougui.com`,
 * which the reverse proxy sends to the server and falls back to the Raspberry
 * Pi. The others are pinned: `{app}.srv.zougui.com` and `{app}.pi.zougui.com`
 * never fail over.
 */
export const domainModeValues = ["auto", "server", "raspberry-pi"] as const;

export type DomainMode = (typeof domainModeValues)[number];

/** Label inserted between the app and the root domain for each mode. */
const domainModeLabels: Record<DomainMode, string | null> = {
  auto: null,
  server: "srv",
  "raspberry-pi": "pi",
};

export interface ParsedHostname {
  /** The app's subdomain, e.g. `trackers`. */
  app: string;
  mode: DomainMode;
}

/**
 * Splits a suite hostname into its app and {@link DomainMode}. Returns
 * `undefined` for anything outside {@link rootDomain} (e.g. `localhost`), where
 * there is nothing to switch.
 */
export const parseHostname = (hostname: string): ParsedHostname | undefined => {
  const suffix = `.${rootDomain}`;
  if (!hostname.endsWith(suffix)) return;

  const labels = hostname.slice(0, -suffix.length).split(".");
  const last = labels.at(-1);
  const pinned = domainModeValues.find(
    (mode) => mode !== "auto" && domainModeLabels[mode] === last,
  );

  if (pinned && labels.length > 1) {
    return { app: labels.slice(0, -1).join("."), mode: pinned };
  }

  return { app: labels.join("."), mode: "auto" };
};

/**
 * Rewrites a suite URL to route through the given {@link DomainMode}, keeping
 * its path, query and hash. URLs outside {@link rootDomain} are returned as is.
 */
export const withDomainMode = (url: string, mode: DomainMode): string => {
  const parsed = new URL(url);
  const host = parseHostname(parsed.hostname);
  if (!host) return url;

  const modeLabel = domainModeLabels[mode];
  parsed.hostname = [host.app, modeLabel, rootDomain].filter(Boolean).join(".");
  return parsed.toString();
};

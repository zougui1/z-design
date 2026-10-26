"use client";

import { useMemo, useSyncExternalStore } from "react";

import { type ParsedHostname, parseHostname } from "./domain.data";

// The hostname never changes without a full page load, so there is nothing to
// subscribe to.
const subscribe = () => () => {};
const getSnapshot = () => window.location.hostname;
const getServerSnapshot = () => null;

/**
 * The current page's suite hostname, split into app and domain mode. `undefined`
 * during SSR and outside the suite's domain (e.g. on `localhost`).
 */
export const useCurrentHostname = (): ParsedHostname | undefined => {
  const hostname = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return useMemo(
    () => (hostname ? parseHostname(hostname) : undefined),
    [hostname],
  );
};

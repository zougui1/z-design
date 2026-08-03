"use client";

import { mergeProps, useRender } from "@base-ui/react";
import NextLink from "next/link";

interface LinkProps extends useRender.ComponentProps<"a"> {
  scope?: Link.Scope;
}

/**
 * `rel`/`target` defaults per scope:
 * - `internal` — same app, trusted: nothing added.
 * - `suite` — another app in the personal suite: `noopener` so the opened
 *   context can't reach back via `window.opener`, while keeping the referrer.
 * - `external` — third-party: `noreferrer noopener` and opened in a new tab.
 */
const scopeProps: Record<Link.Scope, useRender.ComponentProps<"a">> = {
  internal: {},
  suite: { rel: "noopener" },
  external: { rel: "noreferrer noopener", target: "_blank" },
};

export const Link = ({
  scope = "internal",
  className,
  render,
  ...props
}: LinkProps) => {
  return useRender({
    // Defaults to Next's Link for client-side navigation; callers can swap the
    // rendered element via `render` (e.g. a plain <a> for a hard navigation).
    // Base UI lets the render element's own props win over the merged ones, so
    // the real `href` must live on this element, not only in `props`. Cast as
    // the app already does for Next's typed routes (see `AppSidebar`).
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: render ?? <NextLink href={props.href as any} />,
    // `props` last so an explicit `rel`/`target` overrides the scope default.
    props: mergeProps<"a">({ className, ...scopeProps[scope] }, props),
  });
};

export namespace Link {
  export type Props = LinkProps;
  export type Scope = "internal" | "suite" | "external";
}

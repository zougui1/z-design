"use client";

import { LayoutGrid } from "lucide-react";

import {
  AppMenu as AppMenuBase,
  type AppMenuProps as AppMenuBaseProps,
} from "~/ui/components/standard/AppMenu";
import { Button } from "~/ui/components/standard/Button";

import { type AppName, apps } from "./apps.data";

export interface AppMenuProps extends Omit<
  AppMenuBaseProps,
  "apps" | "trigger"
> {
  /** App to hide from the menu — typically the current app. */
  current?: AppName;
  hidden?: AppName[];
  /**
   * Element that opens the menu. Defaults to a ghost icon button (a grid/app
   * launcher glyph) sized for the header.
   */
  trigger?: React.ReactElement;
}

/** Waffle/grid launcher — the conventional "menu of apps" affordance. */
const defaultTrigger = (
  <Button variant="ghost" size="icon" aria-label="Open apps menu">
    <LayoutGrid />
  </Button>
);

/**
 * App switcher pre-wired with the suite's {@link apps}. Domain-specific, so it
 * lives under `features` and is imported explicitly rather than through the main
 * barrel: `import { AppMenu } from "@zougui1/ui/features/apps"`.
 */
export const AppMenu = ({
  current,
  hidden,
  trigger = defaultTrigger,
  ...props
}: AppMenuProps) => {
  const hiddenSet = new Set(((hidden ?? current) ? [current] : []) as string[]);
  const items = Object.values(apps)
    .filter((app) => !hiddenSet.has(app.name))
    .map((app) => ({
      ...app,
      // Apps only expose a favicon, so use it as the icon rather than a bundled
      // SVG. Plain <img> (not next/image) to avoid per-domain remote config.
      icon: (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`${app.url}/favicon.ico`}
          alt=""
          className="size-4 shrink-0 rounded-xs"
        />
      ),
    }));

  return <AppMenuBase apps={items} trigger={trigger} {...props} />;
};

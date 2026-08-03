"use client";

import {
  AppMenu as AppMenuBase,
  type AppMenuProps as AppMenuBaseProps,
} from "~/ui/components/standard/AppMenu";

import { type AppName, apps } from "./apps.data";

export interface AppMenuProps extends Omit<AppMenuBaseProps, "apps"> {
  /** App to hide from the menu — typically the current app. */
  current?: AppName;
  hidden?: AppName[];
}

/**
 * App switcher pre-wired with the suite's {@link apps}. Domain-specific, so it
 * lives under `features` and is imported explicitly rather than through the main
 * barrel: `import { AppMenu } from "@zougui1/ui/features/apps"`.
 */
export const AppMenu = ({ current, hidden, ...props }: AppMenuProps) => {
  const hiddenSet = new Set(((hidden ?? current) ? [current] : []) as string[]);
  const items = Object.values(apps).filter((app) => !hiddenSet.has(app.name));

  return <AppMenuBase apps={items} {...props} />;
};

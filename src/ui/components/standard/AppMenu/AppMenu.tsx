"use client";

import { Menu, type MenuLinkItem, type MenuProps } from "../Menu";

export interface AppMenuItem {
  /** Display name of the app. */
  name: string;
  /** Absolute URL the entry links to. */
  url: string;
  /**
   * Icon rendered before the name — any node: an inline-SVG icon element, an
   * `<img>` (e.g. the app's favicon), etc. Size it yourself; the switcher does
   * not impose one.
   */
  icon?: React.ReactNode;
  slotProps?: MenuLinkItem["slotProps"] & {
    root?: Partial<Omit<MenuLinkItem, "slotProps">>;
  };
}

export interface AppMenuProps extends Omit<MenuProps, "items"> {
  apps: AppMenuItem[];
}

/**
 * Presentational app switcher. Domain-agnostic: it renders whatever `apps` it is
 * given. The data-bound version lives in `~/ui/features/apps`.
 */
export const AppMenu = ({ apps, ...props }: AppMenuProps) => {
  return (
    <Menu
      {...props}
      items={apps.map((app) => ({
        href: app.url,
        label: (
          <span className="flex items-center gap-2">
            {app.icon}
            {app.name}
          </span>
        ),
      }))}
    />
  );
};

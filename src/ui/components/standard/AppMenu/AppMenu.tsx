"use client";

import type { IconProps } from "../../icons";
import { Menu, type MenuLinkItem, type MenuProps } from "../Menu";

export interface AppMenuItem {
  /** Display name of the app. */
  name: string;
  /** Absolute URL the entry links to. */
  url: string;
  /**
   * Icon rendered before the name. A React component (inline SVG), NOT an asset
   * path — this package is compiled with `tsc`, so there is no bundler to turn
   * `.svg` files into components. Pass a `lucide-react` icon or one of the
   * components from `~/ui/components/icons`.
   */
  icon: React.ComponentType<IconProps>;
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
      items={apps.map((app) => {
        const Icon = app.icon;
        return {
          href: app.url,
          label: (
            <span className="flex items-center gap-2">
              <Icon className="size-4 shrink-0" />
              {app.name}
            </span>
          ),
        };
      })}
    />
  );
};

"use client";

import { BaseMenu, BaseMenubar } from "../base";
import type { MenuItem } from "./Menu";

export interface MenubarMenu {
  label: React.ReactNode;
  items: MenuItem[];
  disabled?: boolean;
}

export interface MenubarProps extends BaseMenubar.Root.Props {
  menus: MenubarMenu[];
  slotProps?: {
    menu?: Partial<Omit<BaseMenu.Root.Props, "children">>;
    trigger?: Partial<BaseMenubar.Trigger.Props>;
    portal?: Partial<BaseMenu.Portal.Props>;
    positioner?: Partial<BaseMenu.Positioner.Props>;
    popup?: Partial<BaseMenu.Popup.Props>;
    item?: Partial<Omit<BaseMenu.Item.Props, "children">>;
  };
}

export const Menubar = ({ menus, slotProps, ...props }: MenubarProps) => {
  return (
    <BaseMenubar.Root {...props}>
      {menus.map((menu, menuIndex) => (
        <BaseMenu.Root key={menuIndex} {...slotProps?.menu}>
          <BaseMenubar.Trigger disabled={menu.disabled} {...slotProps?.trigger}>
            {menu.label}
          </BaseMenubar.Trigger>

          <BaseMenu.Portal {...slotProps?.portal}>
            <BaseMenu.Positioner
              sideOffset={6}
              align="start"
              {...slotProps?.positioner}
            >
              <BaseMenu.Popup {...slotProps?.popup}>
                {menu.items.map((item, index) => {
                  if ("separator" in item) {
                    return <BaseMenu.Separator key={index} />;
                  }

                  if ("groupLabel" in item) {
                    return (
                      <BaseMenu.GroupLabel key={index}>
                        {item.groupLabel}
                      </BaseMenu.GroupLabel>
                    );
                  }

                  return (
                    <BaseMenu.Item
                      key={index}
                      onClick={item.onClick}
                      disabled={item.disabled}
                      {...slotProps?.item}
                    >
                      {item.label}
                      {item.shortcut != null && (
                        <BaseMenu.Shortcut>{item.shortcut}</BaseMenu.Shortcut>
                      )}
                    </BaseMenu.Item>
                  );
                })}
              </BaseMenu.Popup>
            </BaseMenu.Positioner>
          </BaseMenu.Portal>
        </BaseMenu.Root>
      ))}
    </BaseMenubar.Root>
  );
};

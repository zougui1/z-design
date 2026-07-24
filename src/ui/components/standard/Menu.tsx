"use client";

import { BaseButton, BaseMenu } from "../base";

export interface MenuActionItem {
  label: React.ReactNode;
  onClick?: BaseMenu.Item.Props["onClick"];
  shortcut?: React.ReactNode;
  disabled?: boolean;
}

export type MenuItem =
  | MenuActionItem
  | { separator: true }
  | { groupLabel: React.ReactNode };

export interface MenuProps extends BaseMenu.Root.Props {
  trigger: React.ReactNode;
  items: MenuItem[];
  slotProps?: {
    trigger?: Partial<BaseButton.Props>;
    portal?: Partial<BaseMenu.Portal.Props>;
    positioner?: Partial<BaseMenu.Positioner.Props>;
    popup?: Partial<BaseMenu.Popup.Props>;
    item?: Partial<Omit<BaseMenu.Item.Props, "children">>;
  };
}

export const Menu = ({ trigger, items, slotProps, ...props }: MenuProps) => {
  return (
    <BaseMenu.Root {...props}>
      <BaseMenu.Trigger render={<BaseButton {...slotProps?.trigger} />}>
        {trigger}
      </BaseMenu.Trigger>

      <BaseMenu.Portal {...slotProps?.portal}>
        <BaseMenu.Positioner {...slotProps?.positioner}>
          <BaseMenu.Popup {...slotProps?.popup}>
            {items.map((item, index) => {
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
  );
};

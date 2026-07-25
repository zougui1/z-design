"use client";

import { BaseContextMenu } from "../base";
import type { MenuItem } from "./Menu";

export interface ContextMenuProps extends BaseContextMenu.Root.Props {
  /** The area that opens the context menu on right-click. */
  children: React.ReactNode;
  items: MenuItem[];
  slotProps?: {
    trigger?: Partial<BaseContextMenu.Trigger.Props>;
    portal?: Partial<BaseContextMenu.Portal.Props>;
    positioner?: Partial<BaseContextMenu.Positioner.Props>;
    popup?: Partial<BaseContextMenu.Popup.Props>;
    item?: Partial<Omit<BaseContextMenu.Item.Props, "children">>;
  };
}

export const ContextMenu = ({
  children,
  items,
  slotProps,
  ...props
}: ContextMenuProps) => {
  return (
    <BaseContextMenu.Root {...props}>
      <BaseContextMenu.Trigger {...slotProps?.trigger}>
        {children}
      </BaseContextMenu.Trigger>

      <BaseContextMenu.Portal {...slotProps?.portal}>
        <BaseContextMenu.Positioner {...slotProps?.positioner}>
          <BaseContextMenu.Popup {...slotProps?.popup}>
            {items.map((item, index) => {
              if ("separator" in item) {
                return <BaseContextMenu.Separator key={index} />;
              }

              if ("groupLabel" in item) {
                return (
                  <BaseContextMenu.Group key={index}>
                    <BaseContextMenu.GroupLabel>
                      {item.groupLabel}
                    </BaseContextMenu.GroupLabel>
                  </BaseContextMenu.Group>
                );
              }

              if ("href" in item) {
                return (
                  <BaseContextMenu.LinkItem
                    key={index}
                    href={item.href}
                    target={item.target}
                    rel={item.rel}
                  >
                    {item.label}
                    {item.shortcut != null && (
                      <BaseContextMenu.Shortcut>
                        {item.shortcut}
                      </BaseContextMenu.Shortcut>
                    )}
                  </BaseContextMenu.LinkItem>
                );
              }

              return (
                <BaseContextMenu.Item
                  key={index}
                  onClick={item.onClick}
                  disabled={item.disabled}
                  {...slotProps?.item}
                >
                  {item.label}
                  {item.shortcut != null && (
                    <BaseContextMenu.Shortcut>
                      {item.shortcut}
                    </BaseContextMenu.Shortcut>
                  )}
                </BaseContextMenu.Item>
              );
            })}
          </BaseContextMenu.Popup>
        </BaseContextMenu.Positioner>
      </BaseContextMenu.Portal>
    </BaseContextMenu.Root>
  );
};

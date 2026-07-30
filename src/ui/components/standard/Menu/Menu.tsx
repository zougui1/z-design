"use client";

import { BaseButton, BaseMenu } from "../../base";

export interface MenuActionItem extends Omit<
  BaseMenu.Item.Props,
  "label" | "children"
> {
  label: React.ReactNode;
  shortcut?: React.ReactNode;
  slotProps?: {
    shortcut?: Partial<BaseMenu.Shortcut.Props>;
  };
}

export interface MenuLinkItem extends Omit<
  BaseMenu.LinkItem.Props,
  "label" | "children"
> {
  label: React.ReactNode;
  /** Renders the entry as a navigable link. */
  href: string;
  shortcut?: React.ReactNode;
  slotProps?: {
    shortcut?: Partial<BaseMenu.Shortcut.Props>;
  };
}

export interface MenuSeparatorItem extends BaseMenu.Separator.Props {
  separator: true;
}

export interface MenuGroupLabelItem extends Omit<
  BaseMenu.GroupLabel.Props,
  "children"
> {
  groupLabel: React.ReactNode;
  slotProps?: {
    group?: Partial<Omit<BaseMenu.Group.Props, "children">>;
  };
}

export type MenuItem =
  | MenuActionItem
  | MenuLinkItem
  | MenuSeparatorItem
  | MenuGroupLabelItem;

export interface MenuProps extends BaseMenu.Root.Props {
  trigger: React.ReactNode;
  items: MenuItem[];
  slotProps?: {
    trigger?: Partial<BaseButton.Props>;
    portal?: Partial<BaseMenu.Portal.Props>;
    positioner?: Partial<BaseMenu.Positioner.Props>;
    popup?: Partial<BaseMenu.Popup.Props>;
    /** Applied to every action item; the item's own props override these. */
    item?: Partial<Omit<BaseMenu.Item.Props, "children">>;
    /** Applied to every link item; the item's own props override these. */
    linkItem?: Partial<Omit<BaseMenu.LinkItem.Props, "children">>;
    /** Applied to every separator; the item's own props override these. */
    separator?: Partial<BaseMenu.Separator.Props>;
    /** Applied to every group; the item's own `slotProps.group` override these. */
    group?: Partial<Omit<BaseMenu.Group.Props, "children">>;
    /** Applied to every group label; the item's own props override these. */
    groupLabel?: Partial<Omit<BaseMenu.GroupLabel.Props, "children">>;
    /** Applied to every shortcut; the item's own `slotProps.shortcut` override these. */
    shortcut?: Partial<BaseMenu.Shortcut.Props>;
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
                const { separator, ...separatorProps } = item;
                return (
                  <BaseMenu.Separator
                    key={index}
                    {...slotProps?.separator}
                    {...separatorProps}
                  />
                );
              }

              if ("groupLabel" in item) {
                const {
                  groupLabel,
                  slotProps: itemSlotProps,
                  ...labelProps
                } = item;
                return (
                  <BaseMenu.Group
                    key={index}
                    {...slotProps?.group}
                    {...itemSlotProps?.group}
                  >
                    <BaseMenu.GroupLabel
                      {...slotProps?.groupLabel}
                      {...labelProps}
                    >
                      {groupLabel}
                    </BaseMenu.GroupLabel>
                  </BaseMenu.Group>
                );
              }

              if ("href" in item) {
                const {
                  label,
                  shortcut,
                  slotProps: itemSlotProps,
                  ...linkProps
                } = item;
                return (
                  <BaseMenu.LinkItem
                    key={index}
                    {...slotProps?.linkItem}
                    {...linkProps}
                  >
                    {label}
                    {shortcut != null && (
                      <BaseMenu.Shortcut
                        {...slotProps?.shortcut}
                        {...itemSlotProps?.shortcut}
                      >
                        {shortcut}
                      </BaseMenu.Shortcut>
                    )}
                  </BaseMenu.LinkItem>
                );
              }

              const {
                label,
                shortcut,
                slotProps: itemSlotProps,
                ...itemProps
              } = item;
              return (
                <BaseMenu.Item key={index} {...slotProps?.item} {...itemProps}>
                  {label}
                  {shortcut != null && (
                    <BaseMenu.Shortcut
                      {...slotProps?.shortcut}
                      {...itemSlotProps?.shortcut}
                    >
                      {shortcut}
                    </BaseMenu.Shortcut>
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

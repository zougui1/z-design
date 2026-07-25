"use client";

import { BaseTabs } from "../../base";

export interface TabItem {
  value: string;
  label: React.ReactNode;
  content?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  slotProps?: {
    tab?: Partial<Omit<BaseTabs.Tab.Props, "value" | "children">>;
    panel?: Partial<Omit<BaseTabs.Panel.Props, "value" | "children">>;
  };
}

export interface TabsProps extends BaseTabs.Root.Props {
  items: TabItem[];
  slotProps?: {
    list?: Partial<BaseTabs.List.Props>;
    tab?: Partial<Omit<BaseTabs.Tab.Props, "value">>;
    panel?: Partial<Omit<BaseTabs.Panel.Props, "value">>;
  };
}

export const Tabs = ({ items, slotProps, ...props }: TabsProps) => {
  return (
    <BaseTabs.Root {...props}>
      <BaseTabs.List {...slotProps?.list}>
        {items.map((item) => (
          <BaseTabs.Tab
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            {...slotProps?.tab}
            {...item.slotProps?.tab}
          >
            {item.icon}
            {item.label}
          </BaseTabs.Tab>
        ))}
      </BaseTabs.List>

      {items.map((item) => (
        <BaseTabs.Panel
          key={item.value}
          value={item.value}
          {...slotProps?.panel}
          {...item.slotProps?.panel}
        >
          {item.content}
        </BaseTabs.Panel>
      ))}
    </BaseTabs.Root>
  );
};

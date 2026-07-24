"use client";

import { BaseAccordion } from "../base";

export interface AccordionItem {
  value?: string | number;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps extends BaseAccordion.Root.Props {
  items: AccordionItem[];
  slotProps?: {
    item?: Partial<Omit<BaseAccordion.Item.Props, "value">>;
    header?: Partial<BaseAccordion.Header.Props>;
    trigger?: Partial<Omit<BaseAccordion.Trigger.Props, "children">>;
    triggerIcon?: Partial<BaseAccordion.TriggerIcon.Props>;
    panel?: Partial<Omit<BaseAccordion.Panel.Props, "children">>;
  };
}

export const Accordion = ({ items, slotProps, ...props }: AccordionProps) => {
  return (
    <BaseAccordion.Root {...props}>
      {items.map((item, index) => (
        <BaseAccordion.Item
          key={item.value ?? index}
          value={item.value}
          disabled={item.disabled}
          {...slotProps?.item}
        >
          <BaseAccordion.Header {...slotProps?.header}>
            <BaseAccordion.Trigger {...slotProps?.trigger}>
              {item.label}
              <BaseAccordion.TriggerIcon {...slotProps?.triggerIcon} />
            </BaseAccordion.Trigger>
          </BaseAccordion.Header>
          <BaseAccordion.Panel {...slotProps?.panel}>
            {item.content}
          </BaseAccordion.Panel>
        </BaseAccordion.Item>
      ))}
    </BaseAccordion.Root>
  );
};

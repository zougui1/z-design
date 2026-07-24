"use client";

import { BaseCollapsible } from "../base";

export interface CollapsibleProps extends BaseCollapsible.Root.Props {
  trigger: React.ReactNode;
  hideIcon?: boolean;
  slotProps?: {
    trigger?: Partial<Omit<BaseCollapsible.Trigger.Props, "children">>;
    triggerIcon?: Partial<BaseCollapsible.TriggerIcon.Props>;
    panel?: Partial<Omit<BaseCollapsible.Panel.Props, "children">>;
  };
}

export const Collapsible = ({
  trigger,
  hideIcon,
  children,
  slotProps,
  ...props
}: CollapsibleProps) => {
  return (
    <BaseCollapsible.Root {...props}>
      <BaseCollapsible.Trigger {...slotProps?.trigger}>
        {!hideIcon && <BaseCollapsible.TriggerIcon {...slotProps?.triggerIcon} />}
        {trigger}
      </BaseCollapsible.Trigger>
      <BaseCollapsible.Panel {...slotProps?.panel}>
        {children}
      </BaseCollapsible.Panel>
    </BaseCollapsible.Root>
  );
};

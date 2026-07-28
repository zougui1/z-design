"use client";

import { Check } from "lucide-react";

import { BaseCheckbox } from "../../base";

export interface CheckboxProps extends BaseCheckbox.Root.Props {
  slotProps?: {
    indicator?: Partial<BaseCheckbox.Indicator.Props>;
    icon?: React.ComponentProps<typeof Check>;
  };
}

export const Checkbox = ({ slotProps, ...props }: CheckboxProps) => {
  return (
    <BaseCheckbox.Root {...props}>
      <BaseCheckbox.Indicator {...slotProps?.indicator}>
        <Check {...slotProps?.icon} />
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  );
};

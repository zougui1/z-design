"use client";

import { cn } from "~/ui/utils";

import { BaseRadio } from "../../base";

export interface RadioProps extends BaseRadio.Root.Props {
  slotProps?: {
    indicator?: Partial<BaseRadio.Indicator.Props>;
  };
}

export const Radio = ({ slotProps, ...props }: RadioProps) => {
  return (
    <BaseRadio.Root {...props}>
      <BaseRadio.Indicator {...slotProps?.indicator} />
    </BaseRadio.Root>
  );
};

export interface RadioGroupItem {
  label: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps extends BaseRadio.Group.Props {
  items: RadioGroupItem[];
  slotProps?: {
    item?: Partial<Omit<RadioProps, "value">>;
    label?: React.ComponentProps<"label">;
  };
}

export const RadioGroup = ({ items, slotProps, ...props }: RadioGroupProps) => {
  return (
    <BaseRadio.Group {...props}>
      {items.map((item) => (
        <label
          key={item.value}
          {...slotProps?.label}
          className={cn(
            `flex w-fit items-center gap-2 text-sm
            has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50`,
            slotProps?.label?.className,
          )}
        >
          <Radio value={item.value} disabled={item.disabled} {...slotProps?.item} />
          {item.label}
        </label>
      ))}
    </BaseRadio.Group>
  );
};

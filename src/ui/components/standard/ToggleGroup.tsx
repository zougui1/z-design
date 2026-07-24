"use client";

import { BaseToggle, BaseToggleGroup } from "../base";

export interface ToggleGroupItem {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
  "aria-label"?: string;
}

export interface ToggleGroupProps extends BaseToggleGroup.Props {
  items: ToggleGroupItem[];
  variant?: BaseToggle.Variant;
  size?: BaseToggle.Size;
  slotProps?: {
    item?: Partial<Omit<BaseToggle.Props, "value">>;
  };
}

export const ToggleGroup = ({
  items,
  variant,
  size,
  slotProps,
  ...props
}: ToggleGroupProps) => {
  return (
    <BaseToggleGroup {...props}>
      {items.map((item) => (
        <BaseToggle
          key={item.value}
          value={item.value}
          disabled={item.disabled}
          aria-label={item["aria-label"]}
          variant={variant}
          size={size}
          {...slotProps?.item}
        >
          {item.label}
        </BaseToggle>
      ))}
    </BaseToggleGroup>
  );
};

"use client";

import { X } from "lucide-react";

import { cnState } from "~/ui/utils";

import { BaseCombobox } from "../../../base";

export interface ComboboxInputMultipleProps<Value>
  extends BaseCombobox.InputGroup.Props {
  getValue?: (value: Value) => string;
  getLabel?: (value: Value) => React.ReactNode;
  anchor?: ReturnType<typeof BaseCombobox.useAnchor>;
  placeholder?: string;
  slotProps?: {
    input?: Partial<BaseCombobox.ChipsInput.Props>;
    chips?: Partial<BaseCombobox.Chips.Props>;
    value?: Partial<BaseCombobox.Value.Props>;
    chip?: Partial<BaseCombobox.Chip.Props>;
    chipRemove?: Partial<BaseCombobox.ChipRemove.Props>;
    chipRemoveIcon?: React.ComponentProps<typeof X>;
  };
}

export function ComboboxInputMultiple<Value>({
  getValue,
  getLabel,
  anchor,
  placeholder,
  slotProps,
  ...props
}: ComboboxInputMultipleProps<Value>) {
  return (
    <BaseCombobox.InputGroup {...props}>
      <BaseCombobox.Chips
        ref={anchor}
        {...slotProps?.chips}
        className={cnState("w-full max-w-2xs", slotProps?.chips?.className)}
      >
        <BaseCombobox.Value
          children={(items: Value[]) => (
            <>
              {items.map((item, i) => {
                const value = getValue?.(item) ?? String(item);
                const label = getLabel?.(item) ?? String(item);
                const labelString = typeof label === "string" ? label : value;

                return (
                  <BaseCombobox.Chip
                    aria-label={labelString}
                    {...slotProps?.chip}
                    key={value}
                  >
                    {label}

                    <BaseCombobox.ChipRemove
                      aria-label={`Remove ${labelString}`}
                      {...slotProps?.chipRemove}
                    >
                      <X {...slotProps?.chipRemoveIcon} />
                    </BaseCombobox.ChipRemove>
                  </BaseCombobox.Chip>
                );
              })}

              <BaseCombobox.ChipsInput
                placeholder={items.length > 0 ? "" : placeholder}
                {...slotProps?.input}
              />
            </>
          )}
          {...slotProps?.value}
        />
      </BaseCombobox.Chips>
    </BaseCombobox.InputGroup>
  );
}

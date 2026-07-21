"use client";

import { Check } from "lucide-react";

import { BaseCombobox } from "../../../base";
import type { ComboboxItemMetaProps } from "../types";

export interface ComboboxListProps<Value> extends Omit<
  BaseCombobox.List.Props,
  "itemToStringValue" | "items"
> {
  getValue?: (value: Value) => string;
  getLabel?: (value: Value) => React.ReactNode;
  slotProps?: {
    item?: Partial<BaseCombobox.Item.Props>;
    itemIndicator?: Partial<BaseCombobox.ItemIndicator.Props>;
    itemIndicatorIcon?: React.ComponentProps<typeof Check>;
  };
}

export function ComboboxList<Value>({
  getValue,
  getLabel,
  slotProps,
  ...props
}: ComboboxListProps<Value>) {
  return (
    <BaseCombobox.List
      children={(item: Value) => {
        const itemSlotProps =
          item &&
          typeof item === "object" &&
          "slotProps" in item &&
          item.slotProps &&
          typeof item.slotProps === "object"
            ? (item.slotProps as ComboboxItemMetaProps["slotProps"])
            : {};

        return (
          <BaseCombobox.Item
            {...slotProps?.item}
            value={item}
            {...itemSlotProps?.root}
            key={getValue?.(item) ?? String(item)}
          >
            {itemSlotProps?.root?.children ?? (
              <>
                {getLabel?.(item) ?? String(item)}

                {!itemSlotProps?.indicator?.hide && (
                  <BaseCombobox.ItemIndicator
                    {...slotProps?.itemIndicator}
                    {...itemSlotProps?.indicator}
                  >
                    <Check
                      {...slotProps?.itemIndicatorIcon}
                      {...itemSlotProps?.indicatorIcon}
                    />
                  </BaseCombobox.ItemIndicator>
                )}
              </>
            )}
          </BaseCombobox.Item>
        );
      }}
      {...props}
    />
  );
}

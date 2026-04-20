"use client";

import { Check } from "lucide-react";

import { BaseCombobox, type BaseInputGroup } from "../../base";
import {
  ComboboxInputMultiple,
  type ComboboxInputMultipleProps,
} from "./ComboboxInputMultiple";
import {
  ComboboxInputSingle,
  type ComboboxInputSingleProps,
} from "./ComboboxInputSingle";

export type ComboboxItemMetaProps = {
  slotProps?: {
    root?: Partial<BaseCombobox.Item.Props>;
    indicator?: Partial<BaseCombobox.ItemIndicator.Props> & { hide?: boolean };
    indicatorIcon?: React.ComponentProps<typeof Check>;
  };
};

export type ComboboxItem<Value> =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Value extends Record<string, any> ? Value & ComboboxItemMetaProps : Value;

type NormalizedComboboxItem = {
  value: string;
  label: string;
};

export interface ComboboxProps<
  Value,
  Multiple extends boolean | undefined = false,
> extends Omit<
  BaseCombobox.Root.Props<Value, Multiple>,
  "itemToStringValue" | "items"
> {
  items: Value[] | readonly Value[];
  getValue?: (value: Value) => string;
  getLabel?: (value: Value) => React.ReactNode;
  placeholder?: string;
  slotProps?: (Multiple extends true
    ? ComboboxInputMultipleProps<Value>["slotProps"]
    : ComboboxInputSingleProps["slotProps"]) & {
    inputGroup?: Partial<BaseInputGroup.Root.Props>;
    portal?: Partial<BaseCombobox.Portal.Props>;
    positioner?: Partial<BaseCombobox.Positioner.Props>;
    popup?: Partial<BaseCombobox.Popup.Props>;
    empty?: Partial<BaseCombobox.Empty.Props>;
    list?: Partial<BaseCombobox.List.Props>;
    item?: Partial<BaseCombobox.Item.Props>;
    itemIndicator?: Partial<BaseCombobox.ItemIndicator.Props>;
    itemIndicatorIcon?: React.ComponentProps<typeof Check>;
  };
}

export function Combobox<Value, Multiple extends boolean | undefined = false>({
  items,
  placeholder,
  getValue: propsGetValue,
  getLabel: propsGetLabel,
  multiple,
  slotProps,
  ...props
}: ComboboxProps<Value, Multiple>) {
  const anchor = BaseCombobox.useAnchor();

  const [firstItem] = items;
  const isNormalizedItemList =
    typeof firstItem === "object" &&
    firstItem &&
    "value" in firstItem &&
    typeof firstItem.value === "string" &&
    "label" in firstItem;

  const defaultGetValue = (item: Value) => {
    return (item as NormalizedComboboxItem).value;
  };

  const defaultGetLabel = (item: Value) => {
    return (item as NormalizedComboboxItem).label;
  };

  const getValue =
    propsGetValue ?? (isNormalizedItemList ? defaultGetValue : undefined);
  const getLabel =
    propsGetLabel ?? (isNormalizedItemList ? defaultGetLabel : undefined);

  return (
    <BaseCombobox.Root
      autoHighlight
      {...props}
      multiple={multiple}
      itemToStringValue={getValue}
      items={items}
    >
      {multiple ? (
        <ComboboxInputMultiple
          placeholder={placeholder}
          getValue={getValue}
          getLabel={getLabel}
          anchor={anchor}
          slotProps={slotProps}
        />
      ) : (
        <ComboboxInputSingle
          {...slotProps?.inputGroup}
          placeholder={placeholder}
          slotProps={slotProps}
        />
      )}

      <BaseCombobox.Portal {...slotProps?.portal}>
        <BaseCombobox.Positioner anchor={anchor} {...slotProps?.positioner}>
          <BaseCombobox.Popup extraWidth={!multiple} {...slotProps?.popup}>
            <BaseCombobox.Empty {...slotProps?.empty}>
              {slotProps?.empty?.children ?? "No items found."}
            </BaseCombobox.Empty>

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
              {...slotProps?.list}
            />
          </BaseCombobox.Popup>
        </BaseCombobox.Positioner>
      </BaseCombobox.Portal>
    </BaseCombobox.Root>
  );
}

"use client";

import { BaseCombobox, type BaseInputGroup } from "../../../base";
import {
  ComboboxInputMultiple,
  type ComboboxInputMultipleProps,
  ComboboxInputSingle,
  type ComboboxInputSingleProps,
  ComboboxList,
  type ComboboxListProps,
} from "../parts";
import { normalizedddGetters } from "../utils";

export interface DesktopComboboxProps<
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
    : ComboboxInputSingleProps["slotProps"]) &
    ComboboxListProps<Value>["slotProps"] & {
      inputGroup?: Partial<BaseInputGroup.Root.Props>;
      portal?: Partial<BaseCombobox.Portal.Props>;
      positioner?: Partial<BaseCombobox.Positioner.Props>;
      popup?: Partial<BaseCombobox.Popup.Props>;
      empty?: Partial<BaseCombobox.Empty.Props>;
      list?: Partial<BaseCombobox.List.Props>;
    };
}

export function DesktopCombobox<
  Value,
  Multiple extends boolean | undefined = false,
>({
  items,
  placeholder,
  getValue: propsGetValue,
  getLabel: propsGetLabel,
  multiple,
  slotProps,
  ...props
}: DesktopComboboxProps<Value, Multiple>) {
  const anchor = BaseCombobox.useAnchor();

  const { getValue, getLabel } = normalizedddGetters(items, {
    getValue: propsGetValue,
    getLabel: propsGetLabel,
  });

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

            <ComboboxList
              {...slotProps?.list}
              getValue={getValue}
              getLabel={getLabel}
              slotProps={slotProps}
            />
          </BaseCombobox.Popup>
        </BaseCombobox.Positioner>
      </BaseCombobox.Portal>
    </BaseCombobox.Root>
  );
}

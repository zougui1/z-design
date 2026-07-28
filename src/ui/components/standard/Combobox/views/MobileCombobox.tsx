"use client";

import { useState } from "react";

import { cnState } from "~/ui/utils";

import { BaseCombobox, BaseDrawer, type BaseInputGroup } from "../../../base";
import { Input } from "../../Input";
import {
  ComboboxInputMultiple,
  type ComboboxInputMultipleProps,
  ComboboxInputSingle,
  type ComboboxInputSingleProps,
  ComboboxList,
  type ComboboxListProps,
} from "../parts";
import type { ComboboxOnOpenChange } from "../types";
import { normalizedddGetters } from "../utils";

export interface MobileComboboxProps<
  Value,
  Multiple extends boolean | undefined = false,
> extends Omit<
  Omit<BaseCombobox.Root.Props<Value, Multiple>, "onOpenChange">,
  "itemToStringValue" | "items"
> {
  onOpenChange?: ComboboxOnOpenChange;
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

export function MobileCombobox<
  Value,
  Multiple extends boolean | undefined = false,
>({
  items,
  placeholder,
  getValue: propsGetValue,
  getLabel: propsGetLabel,
  multiple,
  slotProps,
  defaultOpen: externalDefaultOpen,
  open: externalOpen,
  onOpenChange: externalOnOpenChange,
  ...props
}: MobileComboboxProps<Value, Multiple>) {
  const anchor = BaseCombobox.useAnchor();
  const [internalOpen, setInternalOpen] = useState(
    externalDefaultOpen ?? false,
  );

  const open = externalOpen ?? internalOpen;

  const { getValue, getLabel } = normalizedddGetters(items, {
    getValue: propsGetValue,
    getLabel: propsGetLabel,
  });

  return (
    <BaseCombobox.Root
      autoHighlight
      {...props}
      defaultOpen={externalDefaultOpen}
      open={open}
      onOpenChange={(open, eventDetail) => {
        if (eventDetail.reason === "outside-press") return;

        setInternalOpen(open);
        externalOnOpenChange?.(open, eventDetail);
      }}
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

      <BaseCombobox.Portal keepMounted>
        <BaseDrawer.Root
          swipeDirection="down"
          open={open}
          onOpenChange={(open, eventDetails) => {
            setInternalOpen(open);
            externalOnOpenChange?.(open, eventDetails);
          }}
        >
          <BaseDrawer.Portal>
            <BaseDrawer.Backdrop />

            <BaseDrawer.Viewport
              side="bottom"
              className="px-5 [--viewport-padding:30px]"
            >
              <BaseDrawer.Popup className="flex rounded-md">
                <BaseDrawer.Content className="flex min-h-0 flex-1 flex-col">
                  <BaseDrawer.Header>
                    {placeholder && (
                      <BaseDrawer.Title>{placeholder}</BaseDrawer.Title>
                    )}

                    <BaseCombobox.Input
                      render={<Input placeholder="Search" />}
                    />
                  </BaseDrawer.Header>

                  <BaseCombobox.Empty {...slotProps?.empty}>
                    {slotProps?.empty?.children ?? "No items found."}
                  </BaseCombobox.Empty>

                  <ComboboxList
                    {...slotProps?.list}
                    getValue={getValue}
                    getLabel={getLabel}
                    slotProps={{
                      ...slotProps,
                      item: {
                        ...slotProps?.item,
                        className: cnState(
                          "px-4 py-3 data-selected:bg-background-light/50",
                          slotProps?.item?.className,
                        ),
                      },
                    }}
                  />
                </BaseDrawer.Content>
              </BaseDrawer.Popup>
            </BaseDrawer.Viewport>
          </BaseDrawer.Portal>
        </BaseDrawer.Root>
      </BaseCombobox.Portal>
    </BaseCombobox.Root>
  );
}

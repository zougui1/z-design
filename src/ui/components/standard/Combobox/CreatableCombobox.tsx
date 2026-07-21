"use client";

import { useMemo, useState } from "react";

import { Combobox, type ComboboxProps } from "./Combobox";
import type { NormalizedComboboxItem } from "./types";
import { normalizedddGetters } from "./utils";

export interface CreatableComboboxProps<
  Value extends string | NormalizedComboboxItem,
> extends Omit<ComboboxProps<Value, true>, "value" | "onValueChange"> {
  value: Value[];
  onValueChange: (values: Value[]) => void;
}

export function CreatableCombobox<
  Value extends string | NormalizedComboboxItem,
>({
  items,
  value,
  onValueChange,
  getValue: propsGetValue,
  getLabel: propsGetLabel,
  ...props
}: CreatableComboboxProps<Value>) {
  const [search, setSearch] = useState("");
  const [internalItems, setInternalItems] = useState([...items]);

  const { getValue, getLabel } = normalizedddGetters(items, {
    getValue: propsGetValue,
    getLabel: propsGetLabel,
  });

  const searchTrimmed = search.trim();

  const { shouldShowCreate, newItem, extraItems } = useMemo(() => {
    if (!searchTrimmed) {
      return { shouldShowCreate: false, extraItems: internalItems };
    }

    const normalizedSearch = searchTrimmed.toLowerCase();
    const existingItem = internalItems.find(
      (i) => getValue?.(i)?.trim().toLowerCase() === normalizedSearch,
    );
    const shouldShowCreate = searchTrimmed !== "" && !existingItem;

    if (!shouldShowCreate) {
      return { shouldShowCreate, extraItems: internalItems };
    }

    const newItem = (
      typeof items[0] === "string"
        ? searchTrimmed
        : {
            value: searchTrimmed,
            label: `Create "${searchTrimmed}"`,
          }
    ) as Value;

    const extraItems = [...internalItems, newItem];

    return { shouldShowCreate, newItem, extraItems };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTrimmed, internalItems]);

  return (
    <Combobox
      {...props}
      items={extraItems}
      value={value}
      onValueChange={(newValues) => {
        const created = shouldShowCreate
          ? newValues.find((v) => v === newItem)
          : undefined;

        setSearch("");

        if (!created || !newItem) {
          return onValueChange(newValues);
        }

        setInternalItems((prev) => [...prev, newItem]);
        onValueChange(
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          [...newValues.filter((v) => v !== newItem), newItem] as any,
        );
      }}
      getValue={getValue}
      getLabel={(item) => {
        if (item === newItem) return `Create "${searchTrimmed}"`;
        return getLabel?.(item);
      }}
      inputValue={search}
      onInputValueChange={setSearch}
    />
  );
}

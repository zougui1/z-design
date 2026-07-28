import type { NormalizedComboboxItem } from "./types";

const getObjectValue = (item: unknown) =>
  (item as NormalizedComboboxItem).value;
const getObjectLabel = (item: unknown) =>
  (item as NormalizedComboboxItem).label;

const getStringValue = (item: unknown) => item as string;
const getStringLabel = (item: unknown) => item as string;

export const normalizedddGetters = <T>(
  items: T[] | readonly T[],
  config: {
    getValue: ((value: T) => string) | undefined;
    getLabel: ((value: T) => React.ReactNode) | undefined;
  },
) => {
  const [firstItem] = items;

  const isStringItemList = typeof firstItem === "string";
  const isObjectItemList =
    typeof firstItem === "object" &&
    firstItem &&
    "value" in firstItem &&
    typeof firstItem.value === "string" &&
    "label" in firstItem;

  const getValue = (() => {
    if (config.getValue) return config.getValue;
    if (isObjectItemList) return getObjectValue;
    if (isStringItemList) return getStringValue;
  })();

  const getLabel = (() => {
    if (config.getLabel) return config.getLabel;
    if (isObjectItemList) return getObjectLabel;
    if (isStringItemList) return getStringLabel;
  })();

  return { getValue, getLabel };
};

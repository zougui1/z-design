import type { Check } from "lucide-react";

import type { BaseCombobox } from "../../base";

export type ComboboxItemMetaProps = {
  slotProps?: {
    root?: Partial<BaseCombobox.Item.Props>;
    indicator?: Partial<BaseCombobox.ItemIndicator.Props> & { hide?: boolean };
    indicatorIcon?: React.ComponentProps<typeof Check>;
  };
};

export type ComboboxItem<Value> =
  Value extends Record<string, any> ? Value & ComboboxItemMetaProps : Value;

export type NormalizedComboboxItem = {
  value: string;
  label: React.ReactNode;
};

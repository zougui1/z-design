import type { Check } from "lucide-react";

import type { BaseCombobox, BaseDrawer } from "../../base";

export type ComboboxOnOpenChange = (
  open: boolean,
  eventDetails:
    | BaseCombobox.Root.ChangeEventDetails
    | BaseDrawer.Root.ChangeEventDetails,
) => void;

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

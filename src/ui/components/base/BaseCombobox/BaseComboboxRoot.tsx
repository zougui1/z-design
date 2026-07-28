"use client";

import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxRootProps<
  Value,
  Multiple extends boolean | undefined = false,
> extends PrimitiveCombobox.Root.Props<Value, Multiple> {}

export type BaseComboboxRootState = PrimitiveCombobox.Root.State;

export function BaseComboboxRoot<
  Value,
  Multiple extends boolean | undefined = false,
>(props: BaseComboboxRootProps<Value, Multiple>) {
  return <PrimitiveCombobox.Root data-slot="combobox-root" {...props} />;
}

export namespace BaseComboboxRoot {
  export type Props<
    Value,
    Multiple extends boolean | undefined = false,
  > = BaseComboboxRootProps<Value, Multiple>;
  export type State = BaseComboboxRootState;
  export type Actions = PrimitiveCombobox.Root.Actions;
  export type ChangeEventDetails = PrimitiveCombobox.Root.ChangeEventDetails;
  export type ChangeEventReason = PrimitiveCombobox.Root.ChangeEventReason;
  export type HighlightEventDetails =
    PrimitiveCombobox.Root.HighlightEventDetails;
  export type HighlightEventReason =
    PrimitiveCombobox.Root.HighlightEventReason;
}

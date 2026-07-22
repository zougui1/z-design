"use client";
import { PrimitiveAutocomplete } from "../../primitives";

export interface BaseAutocompleteRootProps<ItemValue>
  extends PrimitiveAutocomplete.Root.Props<ItemValue> {}

export type BaseAutocompleteRootState = PrimitiveAutocomplete.Root.State;

export function BaseAutocompleteRoot<
  Items extends readonly {
    items: readonly any[];
  }[],
>(
  props: Omit<
    BaseAutocompleteRootProps<Items[number]["items"][number]>,
    "items"
  > & { items: Items },
): React.JSX.Element;
export function BaseAutocompleteRoot<ItemValue>(
  props: Omit<BaseAutocompleteRootProps<ItemValue>, "items"> & {
    items?: readonly ItemValue[] | undefined;
  },
): React.JSX.Element;
export function BaseAutocompleteRoot(props: any) {
  return (
    <PrimitiveAutocomplete.Root data-slot="autocomplete-root" {...props} />
  );
}

export namespace BaseAutocompleteRoot {
  export type Props<ItemValue> = BaseAutocompleteRootProps<ItemValue>;
  export type State = BaseAutocompleteRootState;
}

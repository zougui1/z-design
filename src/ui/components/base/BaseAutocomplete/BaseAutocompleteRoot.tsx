"use client";
import { PrimitiveAutocomplete } from "../../primitives";

export interface BaseAutocompleteRootProps<
  Items extends readonly {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items: readonly any[];
  }[],
> extends PrimitiveAutocomplete.Root.Props<Items[number]["items"][number]> {}

export type BaseAutocompleteRootState = PrimitiveAutocomplete.Root.State;

export function BaseAutocompleteRoot<
  Items extends readonly {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items: readonly any[];
  }[],
>(props: BaseAutocompleteRootProps<Items>) {
  return (
    <PrimitiveAutocomplete.Root data-slot="autocomplete-root" {...props} />
  );
}

export namespace BaseAutocompleteRoot {
  export type Props<
    Items extends readonly {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      items: readonly any[];
    }[],
  > = BaseAutocompleteRootProps<Items>;
  export type State = BaseAutocompleteRootState;
}

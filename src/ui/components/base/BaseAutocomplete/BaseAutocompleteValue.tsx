"use client";
import { PrimitiveAutocomplete } from "../../primitives";

export interface BaseAutocompleteValueProps
  extends PrimitiveAutocomplete.Value.Props {}

export type BaseAutocompleteValueState = PrimitiveAutocomplete.Value.State;

export const BaseAutocompleteValue = (props: BaseAutocompleteValueProps) => {
  return (
    <PrimitiveAutocomplete.Value data-slot="autocomplete-value" {...props} />
  );
};

export namespace BaseAutocompleteValue {
  export type Props = BaseAutocompleteValueProps;
  export type State = BaseAutocompleteValueState;
}

"use client";
import { cnState } from "../../../utils";
import { PrimitiveAutocomplete } from "../../primitives";

export interface BaseAutocompleteRowProps extends PrimitiveAutocomplete.Row.Props {}

export type BaseAutocompleteRowState = PrimitiveAutocomplete.Row.State;

export const BaseAutocompleteRow = ({
  className,
  ...props
}: BaseAutocompleteRowProps) => {
  return (
    <PrimitiveAutocomplete.Row
      data-slot="autocomplete-row"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseAutocompleteRow {
  export type Props = BaseAutocompleteRowProps;
  export type State = BaseAutocompleteRowState;
}

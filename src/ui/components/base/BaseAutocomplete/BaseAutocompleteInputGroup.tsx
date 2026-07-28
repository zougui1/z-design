"use client";
import { cnState } from "../../../utils";
import { PrimitiveAutocomplete } from "../../primitives";

export interface BaseAutocompleteInputGroupProps
  extends PrimitiveAutocomplete.InputGroup.Props {}

export type BaseAutocompleteInputGroupState =
  PrimitiveAutocomplete.InputGroup.State;

export const BaseAutocompleteInputGroup = ({
  className,
  ...props
}: BaseAutocompleteInputGroupProps) => {
  return (
    <PrimitiveAutocomplete.InputGroup
      data-slot="autocomplete-input-group"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseAutocompleteInputGroup {
  export type Props = BaseAutocompleteInputGroupProps;
  export type State = BaseAutocompleteInputGroupState;
}

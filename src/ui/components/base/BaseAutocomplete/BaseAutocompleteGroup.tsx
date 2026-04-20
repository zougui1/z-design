"use client";
import { cnState } from "../../../utils";
import { PrimitiveAutocomplete } from "../../primitives";

export interface BaseAutocompleteGroupProps extends PrimitiveAutocomplete.Group.Props {}

export type BaseAutocompleteGroupState = PrimitiveAutocomplete.Group.State;

export const BaseAutocompleteGroup = ({
  className,
  ...props
}: BaseAutocompleteGroupProps) => {
  return (
    <PrimitiveAutocomplete.Group
      data-slot="autocomplete-group"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseAutocompleteGroup {
  export type Props = BaseAutocompleteGroupProps;
  export type State = BaseAutocompleteGroupState;
}

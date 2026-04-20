"use client";
import { cnState } from "../../../utils";
import { PrimitiveAutocomplete } from "../../primitives";

export interface BaseAutocompleteGroupLabelProps extends PrimitiveAutocomplete.GroupLabel.Props {}

export type BaseAutocompleteGroupLabelState = PrimitiveAutocomplete.GroupLabel.State;

export const BaseAutocompleteGroupLabel = ({
  className,
  ...props
}: BaseAutocompleteGroupLabelProps) => {
  return (
    <PrimitiveAutocomplete.GroupLabel
      data-slot="autocomplete-group-label"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseAutocompleteGroupLabel {
  export type Props = BaseAutocompleteGroupLabelProps;
  export type State = BaseAutocompleteGroupLabelState;
}

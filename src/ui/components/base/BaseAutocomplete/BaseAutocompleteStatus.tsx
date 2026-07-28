"use client";
import { cnState } from "../../../utils";
import { PrimitiveAutocomplete } from "../../primitives";

export interface BaseAutocompleteStatusProps extends PrimitiveAutocomplete.Status.Props {}

export type BaseAutocompleteStatusState = PrimitiveAutocomplete.Status.State;

export const BaseAutocompleteStatus = ({
  className,
  ...props
}: BaseAutocompleteStatusProps) => {
  return (
    <PrimitiveAutocomplete.Status
      data-slot="autocomplete-status"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseAutocompleteStatus {
  export type Props = BaseAutocompleteStatusProps;
  export type State = BaseAutocompleteStatusState;
}

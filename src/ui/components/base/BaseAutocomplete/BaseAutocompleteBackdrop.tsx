"use client";
import { cnState } from "../../../utils";
import { PrimitiveAutocomplete } from "../../primitives";

export interface BaseAutocompleteBackdropProps extends PrimitiveAutocomplete.Backdrop.Props {}

export type BaseAutocompleteBackdropState = PrimitiveAutocomplete.Backdrop.State;

export const BaseAutocompleteBackdrop = ({
  className,
  ...props
}: BaseAutocompleteBackdropProps) => {
  return (
    <PrimitiveAutocomplete.Backdrop
      data-slot="autocomplete-backdrop"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseAutocompleteBackdrop {
  export type Props = BaseAutocompleteBackdropProps;
  export type State = BaseAutocompleteBackdropState;
}

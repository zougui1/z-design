"use client";
import { cnState } from "../../../utils";
import { PrimitiveAutocomplete } from "../../primitives";

export interface BaseAutocompletePositionerProps
  extends PrimitiveAutocomplete.Positioner.Props {}

export type BaseAutocompletePositionerState =
  PrimitiveAutocomplete.Positioner.State;

export const BaseAutocompletePositioner = ({
  className,
  ...props
}: BaseAutocompletePositionerProps) => {
  return (
    <PrimitiveAutocomplete.Positioner
      data-slot="autocomplete-positioner"
      sideOffset={4}
      {...props}
      className={cnState("outline-hidden", className)}
    />
  );
};

export namespace BaseAutocompletePositioner {
  export type Props = BaseAutocompletePositionerProps;
  export type State = BaseAutocompletePositionerState;
}

"use client";
import { cnState } from "../../../utils";
import { PrimitiveAutocomplete } from "../../primitives";

export interface BaseAutocompletePositionerProps
  extends PrimitiveAutocomplete.Positioner.Props {}

export type BaseAutocompletePositionerState =
  PrimitiveAutocomplete.Positioner.State;

export const BaseAutocompletePositioner = ({
  className,
  side = "bottom",
  sideOffset = 6,
  align = "start",
  alignOffset = 0,
  ...props
}: BaseAutocompletePositionerProps) => {
  return (
    <PrimitiveAutocomplete.Positioner
      data-slot="autocomplete-positioner"
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
      {...props}
      className={cnState("isolate z-50 outline-hidden", className)}
    />
  );
};

export namespace BaseAutocompletePositioner {
  export type Props = BaseAutocompletePositionerProps;
  export type State = BaseAutocompletePositionerState;
}

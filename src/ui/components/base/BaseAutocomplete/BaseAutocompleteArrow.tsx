"use client";
import { cnState } from "../../../utils";
import { PrimitiveAutocomplete } from "../../primitives";

export interface BaseAutocompleteArrowProps extends PrimitiveAutocomplete.Arrow.Props {}

export type BaseAutocompleteArrowState = PrimitiveAutocomplete.Arrow.State;

export const BaseAutocompleteArrow = ({
  className,
  ...props
}: BaseAutocompleteArrowProps) => {
  return (
    <PrimitiveAutocomplete.Arrow
      data-slot="autocomplete-arrow"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseAutocompleteArrow {
  export type Props = BaseAutocompleteArrowProps;
  export type State = BaseAutocompleteArrowState;
}

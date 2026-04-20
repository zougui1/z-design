"use client";
import { cnState } from "../../../utils";
import { PrimitiveAutocomplete } from "../../primitives";

export interface BaseAutocompleteSeparatorProps extends PrimitiveAutocomplete.Separator.Props {}

export type BaseAutocompleteSeparatorState = PrimitiveAutocomplete.Separator.State;

export const BaseAutocompleteSeparator = ({
  className,
  ...props
}: BaseAutocompleteSeparatorProps) => {
  return (
    <PrimitiveAutocomplete.Separator
      data-slot="autocomplete-separator"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseAutocompleteSeparator {
  export type Props = BaseAutocompleteSeparatorProps;
  export type State = BaseAutocompleteSeparatorState;
}

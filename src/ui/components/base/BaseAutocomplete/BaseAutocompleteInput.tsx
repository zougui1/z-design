"use client";
import { cnState } from "../../../utils";
import { PrimitiveAutocomplete } from "../../primitives";

export interface BaseAutocompleteInputProps
  extends PrimitiveAutocomplete.Input.Props {}

export type BaseAutocompleteInputState = PrimitiveAutocomplete.Input.State;

export const BaseAutocompleteInput = ({
  className,
  ...props
}: BaseAutocompleteInputProps) => {
  return (
    <PrimitiveAutocomplete.Input
      data-slot="autocomplete-input"
      {...props}
      className={cnState("bg-background rounded-md", className)}
    />
  );
};

export namespace BaseAutocompleteInput {
  export type Props = BaseAutocompleteInputProps;
  export type State = BaseAutocompleteInputState;
}

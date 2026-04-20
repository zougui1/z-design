"use client";
import { cnState } from "../../../utils";
import { PrimitiveAutocomplete } from "../../primitives";

export interface BaseAutocompleteEmptyProps
  extends PrimitiveAutocomplete.Empty.Props {}

export type BaseAutocompleteEmptyState = PrimitiveAutocomplete.Empty.State;

export const BaseAutocompleteEmpty = ({
  className,
  ...props
}: BaseAutocompleteEmptyProps) => {
  return (
    <PrimitiveAutocomplete.Empty
      data-slot="autocomplete-empty"
      {...props}
      className={cnState(
        "p-4 text-[0.925rem] leading-4 text-gray-600",
        className,
      )}
    />
  );
};

export namespace BaseAutocompleteEmpty {
  export type Props = BaseAutocompleteEmptyProps;
  export type State = BaseAutocompleteEmptyState;
}

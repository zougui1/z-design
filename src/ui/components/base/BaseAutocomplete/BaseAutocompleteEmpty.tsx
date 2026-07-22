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
        `text-muted-foreground flex w-full justify-center py-2 text-center
        text-sm empty:hidden`,
        className,
      )}
    />
  );
};

export namespace BaseAutocompleteEmpty {
  export type Props = BaseAutocompleteEmptyProps;
  export type State = BaseAutocompleteEmptyState;
}

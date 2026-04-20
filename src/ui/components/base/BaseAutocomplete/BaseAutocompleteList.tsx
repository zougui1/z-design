"use client";
import { cnState } from "../../../utils";
import { PrimitiveAutocomplete } from "../../primitives";

export interface BaseAutocompleteListProps
  extends PrimitiveAutocomplete.List.Props {}

export type BaseAutocompleteListState = PrimitiveAutocomplete.List.State;

export const BaseAutocompleteList = ({
  className,
  ...props
}: BaseAutocompleteListProps) => {
  return (
    <PrimitiveAutocomplete.List
      data-slot="autocomplete-list"
      {...props}
      className={cnState(
        `max-h-[min(23rem,var(--available-height))] scroll-py-2 overflow-y-auto
        overscroll-contain py-2 outline-0 data-empty:p-0`,
        className,
      )}
    />
  );
};

export namespace BaseAutocompleteList {
  export type Props = BaseAutocompleteListProps;
  export type State = BaseAutocompleteListState;
}

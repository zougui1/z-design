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
        `no-scrollbar
        max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))]
        scroll-py-1 overflow-y-auto overscroll-contain p-1 outline-0
        data-empty:p-0`,
        className,
      )}
    />
  );
};

export namespace BaseAutocompleteList {
  export type Props = BaseAutocompleteListProps;
  export type State = BaseAutocompleteListState;
}

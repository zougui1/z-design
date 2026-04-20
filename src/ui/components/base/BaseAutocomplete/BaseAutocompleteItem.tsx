"use client";
import { cnState } from "../../../utils";
import { PrimitiveAutocomplete } from "../../primitives";

export interface BaseAutocompleteItemProps
  extends PrimitiveAutocomplete.Item.Props {}

export type BaseAutocompleteItemState = PrimitiveAutocomplete.Item.State;

export const BaseAutocompleteItem = ({
  className,
  ...props
}: BaseAutocompleteItemProps) => {
  return (
    <PrimitiveAutocomplete.Item
      data-slot="autocomplete-item"
      {...props}
      className={cnState(
        `flex cursor-pointer items-center gap-2 py-2 pr-8 pl-4 text-base
        leading-4 outline-hidden select-none data-highlighted:relative
        data-highlighted:z-0 data-highlighted:before:absolute
        data-highlighted:before:inset-x-2 data-highlighted:before:inset-y-0
        data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm
        data-highlighted:before:bg-gray-900`,
        className,
      )}
    />
  );
};

export namespace BaseAutocompleteItem {
  export type Props = BaseAutocompleteItemProps;
  export type State = BaseAutocompleteItemState;
}

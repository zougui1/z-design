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
        `data-highlighted:bg-accent data-highlighted:text-accent-foreground
        not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground
        relative flex w-full cursor-pointer items-center gap-2 rounded-md py-1
        pr-8 pl-1.5 text-sm outline-hidden select-none
        data-disabled:pointer-events-none data-disabled:opacity-50
        [&_svg]:pointer-events-none [&_svg]:shrink-0
        [&_svg:not([class*='size-'])]:size-4`,
        className,
      )}
    />
  );
};

export namespace BaseAutocompleteItem {
  export type Props = BaseAutocompleteItemProps;
  export type State = BaseAutocompleteItemState;
}

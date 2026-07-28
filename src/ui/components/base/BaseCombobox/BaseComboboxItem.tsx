"use client";

import { cnState } from "../../../utils";
import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxItemProps extends PrimitiveCombobox.Item.Props {}

export type BaseComboboxItemState = PrimitiveCombobox.Item.State;

export const BaseComboboxItem = ({
  className,
  ...props
}: BaseComboboxItemProps) => {
  return (
    <PrimitiveCombobox.Item
      data-slot="combobox-item"
      {...props}
      className={cnState(
        `data-highlighted:bg-accent data-highlighted:text-accent-foreground
        not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground
        relative flex w-full cursor-default items-center gap-2 rounded-md py-1
        pr-8 pl-1.5 text-sm outline-hidden select-none
        data-disabled:pointer-events-none data-disabled:opacity-50
        [&_svg]:pointer-events-none [&_svg]:shrink-0
        [&_svg:not([class*='size-'])]:size-4`,
        className,
      )}
    />
  );
};

export namespace BaseComboboxItem {
  export type Props = BaseComboboxItemProps;
  export type State = BaseComboboxItemState;
}

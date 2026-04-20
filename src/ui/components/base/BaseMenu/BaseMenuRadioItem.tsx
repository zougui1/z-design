"use client";

import { cnState } from "../../../utils";
import { PrimitiveMenu } from "../../primitives";

export interface BaseMenuRadioItemProps extends PrimitiveMenu.RadioItem.Props {
  inset?: boolean;
}

export type BaseMenuRadioItemState = PrimitiveMenu.RadioItem.State;

export const BaseMenuRadioItem = ({
  className,
  inset,
  ...props
}: BaseMenuRadioItemProps) => {
  return (
    <PrimitiveMenu.RadioItem
      data-slot="menu-radio-item"
      data-inset={inset ? "true" : undefined}
      {...props}
      className={cnState(
        `focus:bg-accent focus:text-accent-foreground
        focus:**:text-accent-foreground relative flex cursor-default
        items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden
        select-none data-disabled:pointer-events-none data-disabled:opacity-50
        data-inset:pl-7 [&_svg]:pointer-events-none [&_svg]:shrink-0
        [&_svg:not([class*='size-'])]:size-4`,
        className,
      )}
    />
  );
};

export namespace BaseMenuRadioItem {
  export type Props = BaseMenuRadioItemProps;
  export type State = BaseMenuRadioItemState;
}

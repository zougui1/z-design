"use client";

import { cnState } from "../../../utils";
import { PrimitiveContextMenu } from "../../primitives";

export interface BaseContextMenuRadioItemProps extends PrimitiveContextMenu.RadioItem.Props {
  inset?: boolean;
}

export type BaseContextMenuRadioItemState = PrimitiveContextMenu.RadioItem.State;

export const BaseContextMenuRadioItem = ({
  className,
  inset,
  ...props
}: BaseContextMenuRadioItemProps) => {
  return (
    <PrimitiveContextMenu.RadioItem
      data-slot="context-menu-radio-item"
      data-inset={inset ? "true" : undefined}
      {...props}
      className={cnState(
        `focus:bg-accent focus:text-accent-foreground
        focus:**:text-accent-foreground relative flex cursor-pointer
        items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden
        select-none data-disabled:pointer-events-none data-disabled:opacity-50
        data-inset:pl-7 [&_svg]:pointer-events-none [&_svg]:shrink-0
        [&_svg:not([class*='size-'])]:size-4`,
        className,
      )}
    />
  );
};

export namespace BaseContextMenuRadioItem {
  export type Props = BaseContextMenuRadioItemProps;
  export type State = BaseContextMenuRadioItemState;
}

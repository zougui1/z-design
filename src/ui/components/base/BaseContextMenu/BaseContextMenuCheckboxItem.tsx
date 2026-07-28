"use client";

import { cnState } from "../../../utils";
import { PrimitiveContextMenu } from "../../primitives";

export interface BaseContextMenuCheckboxItemProps
  extends PrimitiveContextMenu.CheckboxItem.Props {
  inset?: boolean;
}

export type BaseContextMenuCheckboxItemState = PrimitiveContextMenu.CheckboxItem.State;

export const BaseContextMenuCheckboxItem = ({
  className,
  inset,
  ...props
}: BaseContextMenuCheckboxItemProps) => {
  return (
    <PrimitiveContextMenu.CheckboxItem
      data-slot="context-menu-checkbox-item"
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

export namespace BaseContextMenuCheckboxItem {
  export type Props = BaseContextMenuCheckboxItemProps;
  export type State = BaseContextMenuCheckboxItemState;
}

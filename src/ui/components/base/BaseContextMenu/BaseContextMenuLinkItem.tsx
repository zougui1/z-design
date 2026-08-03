"use client";

import { cnState } from "../../../utils";
import { PrimitiveContextMenu } from "../../primitives";

export interface BaseContextMenuLinkItemProps extends PrimitiveContextMenu.LinkItem.Props {}

export type BaseContextMenuLinkItemState = PrimitiveContextMenu.LinkItem.State;

export const BaseContextMenuLinkItem = ({
  className,
  ...props
}: BaseContextMenuLinkItemProps) => {
  return (
    <PrimitiveContextMenu.LinkItem
      data-slot="context-menu-link-item"
      {...props}
      className={cnState(
        `group/dropdown-menu-item focus:bg-accent focus:text-accent-foreground
        not-data-[variant=destructive]:focus:**:text-accent-foreground
        data-[variant=destructive]:text-destructive
        data-[variant=destructive]:focus:bg-destructive/10
        data-[variant=destructive]:focus:text-destructive
        dark:data-[variant=destructive]:focus:bg-destructive/20
        data-[variant=destructive]:*:[svg]:text-destructive relative flex
        cursor-pointer items-center gap-1.5 rounded-md px-1.5 py-1 text-sm
        outline-hidden select-none data-disabled:pointer-events-none
        data-disabled:opacity-50 data-inset:pl-7 [&_svg]:pointer-events-none
        [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
        className,
      )}
    />
  );
};

export namespace BaseContextMenuLinkItem {
  export type Props = BaseContextMenuLinkItemProps;
  export type State = BaseContextMenuLinkItemState;
}

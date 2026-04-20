"use client";

import { cnState } from "../../../utils";
import { PrimitiveMenu } from "../../primitives";

export interface BaseMenuLinkItemProps extends PrimitiveMenu.LinkItem.Props {}

export type BaseMenuLinkItemState = PrimitiveMenu.LinkItem.State;

export const BaseMenuLinkItem = ({
  className,
  ...props
}: BaseMenuLinkItemProps) => {
  return (
    <PrimitiveMenu.LinkItem
      data-slot="menu-link-item"
      {...props}
      className={cnState(
        `group/dropdown-menu-item focus:bg-accent focus:text-accent-foreground
        not-data-[variant=destructive]:focus:**:text-accent-foreground
        data-[variant=destructive]:text-destructive
        data-[variant=destructive]:focus:bg-destructive/10
        data-[variant=destructive]:focus:text-destructive
        dark:data-[variant=destructive]:focus:bg-destructive/20
        data-[variant=destructive]:*:[svg]:text-destructive relative flex
        cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm
        outline-hidden select-none data-disabled:pointer-events-none
        data-disabled:opacity-50 data-inset:pl-7 [&_svg]:pointer-events-none
        [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
        className,
      )}
    />
  );
};

export namespace BaseMenuLinkItem {
  export type Props = BaseMenuLinkItemProps;
  export type State = BaseMenuLinkItemState;
}

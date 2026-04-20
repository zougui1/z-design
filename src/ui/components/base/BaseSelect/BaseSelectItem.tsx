"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";

import { cnState } from "~/ui/utils";

export interface BaseSelectItemProps extends SelectPrimitive.Item.Props {}
export type BaseSelectItemState = SelectPrimitive.Item.State;

export function BaseSelectItem({ className, ...props }: BaseSelectItemProps) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cnState(
        `focus:bg-accent focus:text-accent-foreground
        not-data-[variant=destructive]:focus:**:text-accent-foreground relative
        flex w-full cursor-default items-center gap-1.5 rounded-sm px-1.5 py-1
        text-sm outline-hidden select-none data-disabled:pointer-events-none
        data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0
        [&_svg:not([class*='size-'])]:size-4`,
        className,
      )}
      {...props}
    />
  );
}

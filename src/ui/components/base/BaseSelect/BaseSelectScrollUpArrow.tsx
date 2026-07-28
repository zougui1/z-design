"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { ChevronUpIcon } from "lucide-react";

import { cnState } from "~/ui/utils";

export interface BaseSelectScrollUpArrowProps
  extends SelectPrimitive.ScrollUpArrow.Props {}
export type BaseSelectScrollUpArrowState = SelectPrimitive.ScrollUpArrow.State;

export function BaseSelectScrollUpArrow({
  className,
  children,
  ...props
}: BaseSelectScrollUpArrowProps) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-arrow"
      className={cnState(
        `bg-background-light top-0 z-10 flex w-full cursor-default items-center
        justify-center py-1 [&_svg:not([class*='size-'])]:size-4`,
        className,
      )}
      {...props}
    >
      {children ?? <ChevronUpIcon />}
    </SelectPrimitive.ScrollUpArrow>
  );
}

"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { ChevronDownIcon } from "lucide-react";

import { cnState } from "~/ui/utils";

export interface BaseSelectScrollDownArrowProps
  extends SelectPrimitive.ScrollDownArrow.Props {}
export type BaseSelectScrollDownArrowState =
  SelectPrimitive.ScrollDownArrow.State;

export function BaseSelectScrollDownArrow({
  className,
  children,
  ...props
}: BaseSelectScrollDownArrowProps) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-arrow"
      className={cnState(
        `bg-background-light bottom-0 z-10 flex w-full cursor-default
        items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-4`,
        className,
      )}
      {...props}
    >
      {children ?? <ChevronDownIcon />}
    </SelectPrimitive.ScrollDownArrow>
  );
}

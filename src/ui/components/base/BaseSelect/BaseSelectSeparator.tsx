"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";

import { cnState } from "~/ui/utils";

export interface BaseSelectSeparatorProps
  extends SelectPrimitive.Separator.Props {}
export type BaseSelectSeparatorState = SelectPrimitive.Separator.State;

export function BaseSelectSeparator({
  className,
  ...props
}: BaseSelectSeparatorProps) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cnState(
        "bg-border pointer-events-none -mx-1 my-1 h-px",
        className,
      )}
      {...props}
    />
  );
}

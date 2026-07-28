"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";

import { cnState } from "~/ui/utils";

export interface BaseSelectLabelProps extends SelectPrimitive.Label.Props {}
export type BaseSelectLabelState = SelectPrimitive.Label.State;

export function BaseSelectLabel({ className, ...props }: BaseSelectLabelProps) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cnState(
        "cursor-default text-sm leading-5 font-medium",
        className,
      )}
      {...props}
    />
  );
}

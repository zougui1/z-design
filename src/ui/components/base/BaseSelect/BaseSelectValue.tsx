"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";

import { cnState } from "~/ui/utils";

export interface BaseSelectValueProps extends SelectPrimitive.Value.Props {}
export type BaseSelectValueState = SelectPrimitive.Value.State;

export function BaseSelectValue({ className, ...props }: BaseSelectValueProps) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cnState("flex flex-1 text-left", className)}
      {...props}
    />
  );
}

"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";

import { cnState } from "~/ui/utils";

export interface BaseSelectGroupProps extends SelectPrimitive.Group.Props {}
export type BaseSelectGroupState = SelectPrimitive.Group.State;

export function BaseSelectGroup({ className, ...props }: BaseSelectGroupProps) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cnState("scroll-my-1 p-1", className)}
      {...props}
    />
  );
}

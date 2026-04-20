"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";

import { cnState } from "~/ui/utils";

export interface BaseSelectPositionerProps
  extends SelectPrimitive.Positioner.Props {}
export type BaseSelectPositionerState = SelectPrimitive.Positioner.State;

export function BaseSelectPositioner({
  className,
  side = "bottom",
  sideOffset = 0,
  align = "center",
  alignOffset = 0,
  alignItemWithTrigger = true,
  ...props
}: BaseSelectPositionerProps) {
  return (
    <SelectPrimitive.Positioner
      data-slot="select-positioner"
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
      alignItemWithTrigger={alignItemWithTrigger}
      className={cnState("isolate z-50 outline-hidden select-none", className)}
      {...props}
    />
  );
}

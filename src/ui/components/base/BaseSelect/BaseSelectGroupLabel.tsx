"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";

import { cnState } from "~/ui/utils";

export interface BaseSelectGroupLabelProps
  extends SelectPrimitive.GroupLabel.Props {}
export type BaseSelectGroupLabelState = SelectPrimitive.GroupLabel.State;

export function BaseSelectGroupLabel({
  className,
  ...props
}: BaseSelectGroupLabelProps) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-group-label"
      className={cnState(
        "text-muted-foreground px-1.5 py-1 text-xs",
        className,
      )}
      {...props}
    />
  );
}

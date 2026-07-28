"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";

import { cnState } from "~/ui/utils";

export interface BaseSelectItemTextProps
  extends SelectPrimitive.ItemText.Props {}
export type BaseSelectItemTextState = SelectPrimitive.ItemText.State;

export function BaseSelectItemText({
  className,
  ...props
}: BaseSelectItemTextProps) {
  return (
    <SelectPrimitive.ItemText
      className={cnState(
        "flex flex-1 shrink-0 gap-2 whitespace-nowrap",
        className,
      )}
      {...props}
    />
  );
}

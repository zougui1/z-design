"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { CheckIcon } from "lucide-react";

import { cnState } from "~/ui/utils";

export interface BaseSelectItemIndicatorProps
  extends SelectPrimitive.ItemIndicator.Props {
  children?: React.ReactNode;
}
export type BaseSelectItemIndicatorState = SelectPrimitive.ItemIndicator.State;

export function BaseSelectItemIndicator({
  className,
  children,
  ...props
}: BaseSelectItemIndicatorProps) {
  return (
    <SelectPrimitive.ItemIndicator
      data-slot="select-item-indicator"
      className={cnState(
        "pointer-events-none ml-auto flex items-center justify-center",
        className,
      )}
      render={<span />}
      {...props}
    >
      {children ?? <CheckIcon className="pointer-events-none" />}
    </SelectPrimitive.ItemIndicator>
  );
}

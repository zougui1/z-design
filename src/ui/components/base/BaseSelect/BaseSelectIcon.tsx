"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { ChevronDownIcon } from "lucide-react";

import { cnState } from "~/ui/utils";

export interface BaseSelectIconProps extends SelectPrimitive.Icon.Props {}

export type BaseSelectIconState = SelectPrimitive.Icon.State;

export function BaseSelectIcon({ className, ...props }: BaseSelectIconProps) {
  return (
    <SelectPrimitive.Icon
      data-slot="select-icon"
      render={<ChevronDownIcon />}
      className={cnState(
        "text-muted-foreground pointer-events-none size-4",
        className,
      )}
      {...props}
    />
  );
}

"use client";

import * as SelectPrimitive from "@radix-ui/react-select";

import { cn } from "~/ui/utils";

export interface SelectSeparatorProps extends React.ComponentProps<
  typeof SelectPrimitive.SelectSeparator
> {}

export function SelectSeparator({ className, ...props }: SelectSeparatorProps) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

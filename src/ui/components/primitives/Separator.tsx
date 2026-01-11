"use client";

import { Separator as BaseSeparator } from "@base-ui/react";

import { cn } from "../../utils";

export interface SeparatorProps extends BaseSeparator.Props {}

export function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorProps) {
  return (
    <BaseSeparator
      data-slot="separator"
      orientation={orientation}
      className={cn(
        `bg-border shrink-0 data-[orientation=horizontal]:h-px
        data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full
        data-[orientation=vertical]:w-px`,
        className,
      )}
      {...props}
    />
  );
}

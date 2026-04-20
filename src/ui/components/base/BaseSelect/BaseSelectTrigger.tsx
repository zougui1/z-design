"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";

import { cnState } from "~/ui/utils";

export interface BaseSelectTriggerProps extends SelectPrimitive.Trigger.Props {}

export type BaseSelectTriggerState = SelectPrimitive.Trigger.State;

export function BaseSelectTrigger({
  className,
  ...props
}: BaseSelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cnState(
        `border-border focus-visible:border-primary
        focus-visible:ring-primary/50 aria-invalid:ring-destructive/20
        focus-visible:aria-invalid:ring-destructive/50
        aria-invalid:border-destructive disabled:bg-background-light/50
        data-placeholder:text-muted-foreground bg-background-light flex h-9
        w-full min-w-0 items-center justify-between gap-1.5 rounded-sm border
        px-2.5 py-1 text-base whitespace-nowrap shadow-sm transition-colors
        outline-none select-none focus-visible:ring-3
        disabled:pointer-events-none disabled:cursor-not-allowed
        disabled:opacity-50 aria-invalid:ring-3
        *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex
        *:data-[slot=select-value]:items-center
        *:data-[slot=select-value]:gap-1.5 md:text-sm
        [&_svg]:pointer-events-none [&_svg]:shrink-0
        [&_svg:not([class*='size-'])]:size-4`,
        className,
      )}
      {...props}
    />
  );
}

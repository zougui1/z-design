"use client";

import { Switch as BaseSwitch } from "@base-ui/react";

import { cn } from "~/ui/utils";

export interface SwitchProps extends Omit<BaseSwitch.Root.Props, "className"> {
  className?: string;
}

export function Switch({ className, ...props }: SwitchProps) {
  return (
    <BaseSwitch.Root
      data-slot="switch"
      className={cn(
        `peer data-checked:bg-primary data-unchecked:bg-input inline-flex
        h-[1.15rem] w-8 shrink-0 cursor-pointer items-center rounded-full
        shadow-xs transition-all data-disabled:cursor-not-allowed
        data-disabled:opacity-50`,
        `focus-visible:outline-primary focus-visible:outline-[3px]
        focus-visible:outline-offset-2`,
        className,
      )}
      {...props}
    >
      <BaseSwitch.Thumb
        data-slot="switch-thumb"
        className={cn(
          `bg-background dark:data-unchecked:bg-foreground
          dark:data-checked:bg-primary-foreground pointer-events-none block
          size-4 rounded-full ring-0 transition-transform
          data-checked:translate-x-[calc(100%-2px)]
          data-unchecked:translate-x-0`,
        )}
      />
    </BaseSwitch.Root>
  );
}

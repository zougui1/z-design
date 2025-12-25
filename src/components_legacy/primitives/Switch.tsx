"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "~/ui/utils";

export interface SwitchProps extends React.ComponentProps<
  typeof SwitchPrimitive.Root
> {}

export function Switch({ className, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        `peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input
        inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full shadow-xs
        transition-all disabled:cursor-not-allowed disabled:opacity-50`,
        `focus-visible:outline-primary focus-visible:outline-[3px]
        focus-visible:outline-offset-2`,
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          `bg-background dark:data-[state=unchecked]:bg-foreground
          dark:data-[state=checked]:bg-primary-foreground pointer-events-none
          block size-4 rounded-full ring-0 transition-transform
          data-[state=checked]:translate-x-[calc(100%-2px)]
          data-[state=unchecked]:translate-x-0`,
        )}
      />
    </SwitchPrimitive.Root>
  );
}

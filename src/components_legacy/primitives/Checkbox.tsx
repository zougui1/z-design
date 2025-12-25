"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "~/ui/utils";

export interface CheckboxProps extends React.ComponentProps<
  typeof CheckboxPrimitive.Root
> {}

export function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        `peer border-input bg-input data-[state=checked]:bg-primary
        data-[state=checked]:text-primary-foreground
        data-[state=checked]:border-primary size-4 shrink-0 rounded-sm border
        shadow-xs transition-shadow disabled:cursor-not-allowed
        disabled:opacity-50`,
        `focus-visible:outline-primary focus-visible:outline-[3px]
        focus-visible:outline-offset-2`,
        "aria-invalid:border-destructive aria-invalid:outline-destructive",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

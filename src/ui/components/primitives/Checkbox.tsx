"use client";

import { Checkbox as BaseCheckox } from "@base-ui/react";
import { CheckIcon } from "lucide-react";

import { cn } from "~/ui/utils";

export interface CheckboxProps extends Omit<
  BaseCheckox.Root.Props,
  "className"
> {
  className?: string;
}

export function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <BaseCheckox.Root
      data-slot="checkbox"
      className={cn(
        `peer border-input bg-input data-checked:bg-primary
        data-checked:text-primary-foreground data-checked:border-primary size-4
        shrink-0 cursor-pointer rounded-sm border shadow-xs transition-shadow
        data-disabled:cursor-not-allowed data-disabled:opacity-50`,
        `focus-visible:outline-primary focus-visible:outline-[3px]
        focus-visible:outline-offset-2`,
        "aria-invalid:border-destructive aria-invalid:outline-destructive",
        className,
      )}
      {...props}
    >
      <BaseCheckox.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </BaseCheckox.Indicator>
    </BaseCheckox.Root>
  );
}

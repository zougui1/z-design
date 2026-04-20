"use client";

import { Input as PrimitiveInput } from "@base-ui/react";

import { type ClassValueState, cnState } from "~/ui/utils";

export interface BaseInputProps extends Omit<
  PrimitiveInput.Props,
  "className"
> {
  className?: ClassValueState<PrimitiveInput.State>;
}

export const BaseInput = ({ className, ...props }: BaseInputProps) => {
  return (
    <PrimitiveInput
      data-slot="input"
      className={cnState(
        `border-border focus-visible:border-primary
        focus-visible:ring-primary/50 aria-invalid:ring-destructive/20
        focus-visible:aria-invalid:ring-destructive/50
        aria-invalid:border-destructive disabled:bg-background-light/50
        file:text-foreground placeholder:text-muted-foreground
        bg-background-light h-9 w-full min-w-0 rounded-sm border px-2.5 py-1
        text-base shadow-sm transition-colors outline-none file:inline-flex
        file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium
        focus-visible:ring-3 disabled:pointer-events-none
        disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3
        md:text-sm`,
        className,
      )}
      {...props}
    />
  );
};

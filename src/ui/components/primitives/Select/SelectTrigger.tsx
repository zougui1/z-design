"use client";

import { Select as BaseSelect } from "@base-ui/react";
import { tv, type VariantProps } from "tailwind-variants";
import { ChevronDownIcon } from "lucide-react";

const styles = tv({
  base: `rounded-md flex items-center gap-2 min-w-0 px-3 py-1
    shadow-sm text-base md:text-sm transition-[background,color,box-shadow]
    focus-visible:outline-offset-2 focus-visible:outline-[3px] focus-visible:outline-primary
    aria-invalid:outline-destructive has-[input:disabled]:pointer-events-none has-[input:disabled]:opacity-50
    placeholder:text-muted-foreground
    file:text-foreground file:inline-flex file:h-7 file:border-0
    file:bg-transparent file:text-sm file:font-medium
    selection:bg-default selection:text-default-foreground
    disabled:pointer-events-none disabled:cursor-not-allowed
    disabled:opacity-50
    [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none
    [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer`,

  variants: {
    variant: {
      solid: `bg-input
        hover:bg-input-accent
        focus-visible:bg-input-accent
        aria-invalid:bg-destructive
        aria-invalid:hover:bg-destructive-accent
        aria-invalid:focus-visible:bg-destructive-accent
        [&_input[aria-invalid=true]]:placeholder:text-gray-200`,
      transparent: `bg-input/30
        hover:bg-input-accent/30
        focus-visible:bg-input-accent/30
        aria-invalid:bg-destructive/30
        aria-invalid:hover:bg-destructive-accent/30
        aria-invalid:focus-visible:bg-destructive-accent/30`,
      outline: `border-input border
        hover:border-input-accent
        focus-visible:border-input-accent
        aria-invalid:border-destructive
        aria-invalid:hover:border-destructive-accent
        aria-invalid:focus-visible:border-destructive-accent`,
    },

    blur: {
      true: "backdrop-blur-xs",
    },
  },

  defaultVariants: {
    variant: "outline",
  },
});

export interface SelectTriggerProps
  extends
    Omit<BaseSelect.Trigger.Props, "className">,
    VariantProps<typeof styles> {
  size?: "sm" | "default";
  className?: string;
}

export function SelectTrigger({
  className,
  variant,
  blur,
  size = "default",
  children,
  ...props
}: SelectTriggerProps) {
  return (
    <BaseSelect.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={styles({ variant, blur, className })}
      {...props}
    >
      {children}

      <BaseSelect.Icon>
        <ChevronDownIcon className="size-4 opacity-50" />
      </BaseSelect.Icon>
    </BaseSelect.Trigger>
  );
}

"use client";

import { type VariantProps, tv } from "tailwind-variants";

import { type ClassValueState, cnState } from "~/ui/utils";

import { PrimitiveToggle } from "../primitives";

export const baseToggleStyles = tv({
  base: `
    inline-flex shrink-0 cursor-pointer items-center justify-center gap-2
    rounded-sm text-sm font-medium whitespace-nowrap
    transition-colors outline-none
    hover:bg-muted hover:text-muted-foreground
    data-pressed:bg-accent data-pressed:text-accent-foreground
    focus-visible:ring-3 focus-visible:ring-ring/50
    disabled:pointer-events-none disabled:opacity-50
    aria-invalid:ring-3 aria-invalid:ring-destructive/35
    [&_svg]:pointer-events-none [&_svg]:shrink-0
    [&_svg:not([class*='size-'])]:size-4`,

  variants: {
    variant: {
      default: "bg-transparent",
      outline: `border-input border bg-transparent shadow-xs
        hover:bg-accent hover:text-accent-foreground`,
    },

    size: {
      sm: "h-7 min-w-7 px-1.5",
      default: "h-8 min-w-8 px-2",
      lg: "h-9 min-w-9 px-2.5",
    },
  },

  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface BaseToggleProps
  extends
    Omit<PrimitiveToggle.Props, "className">,
    VariantProps<typeof baseToggleStyles> {
  className?: ClassValueState<PrimitiveToggle.State>;
}

export const BaseToggle = ({
  className,
  variant = "default",
  size = "default",
  ...props
}: BaseToggleProps) => {
  return (
    <PrimitiveToggle
      data-slot="toggle"
      data-variant={variant}
      data-size={size}
      className={cnState(baseToggleStyles({ variant, size }), className)}
      {...props}
    />
  );
};

export namespace BaseToggle {
  export type Props = BaseToggleProps;
  export type State = PrimitiveToggle.State;
  export type Variant = NonNullable<VariantProps<typeof baseToggleStyles>["variant"]>;
  export type Size = NonNullable<VariantProps<typeof baseToggleStyles>["size"]>;
}

"use client";

import { mergeProps, useRender } from "@base-ui/react";
import { type VariantProps, tv } from "tailwind-variants";

import { cn } from "~/ui/utils";

export const baseBadgeStyles = tv({
  base: `
    [--z-badge-color:var(--primary)]
    inline-flex items-center justify-center gap-1 shrink-0 w-fit
    whitespace-nowrap font-medium
    rounded-full border
    transition-colors overflow-hidden
    [&_svg]:pointer-events-none [&_svg]:shrink-0
    focus-visible:ring-3 outline-none
    ring-[oklch(from_var(--z-badge-color)_l_c_h/50%)]`,

  variants: {
    variant: {
      solid: `border-transparent text-white
        bg-[oklch(from_var(--z-badge-color)_l_c_h)]`,
      soft: `border-transparent
        text-[oklch(from_var(--z-badge-color)_l_c_h)]
        bg-[oklch(from_var(--z-badge-color)_l_c_h/12%)]`,
      outline: `bg-transparent
        text-[oklch(from_var(--z-badge-color)_l_c_h)]
        border-[oklch(from_var(--z-badge-color)_l_c_h/40%)]`,
    },

    color: {
      primary: "[--z-badge-color:var(--primary)]",
      success: "[--z-badge-color:var(--success)]",
      warning: "[--z-badge-color:var(--warning)]",
      destructive: "[--z-badge-color:var(--destructive)]",
      neutral: "[--z-badge-color:var(--muted-foreground)]",
    },

    size: {
      sm: "h-4.5 gap-0.5 px-1.5 text-[0.65rem] [&_svg:not([class*='size-'])]:size-2.5",
      default: "h-5 px-2 text-xs [&_svg:not([class*='size-'])]:size-3",
      lg: "h-6 px-2.5 text-sm [&_svg:not([class*='size-'])]:size-3.5",
    },
  },

  defaultVariants: {
    variant: "solid",
    color: "primary",
    size: "default",
  },

  compoundVariants: [
    {
      color: "warning",
      variant: "solid",
      className: "text-black",
    },
    {
      color: "neutral",
      variant: "solid",
      className: "text-background",
    },
  ],
});

export interface BaseBadgeProps
  extends
    Omit<useRender.ComponentProps<"span">, "color">,
    VariantProps<typeof baseBadgeStyles> {}

export const BaseBadge = ({
  className,
  variant = "solid",
  color,
  size = "default",
  render,
  ...props
}: BaseBadgeProps) => {
  return useRender({
    defaultTagName: "span",
    render,
    props: mergeProps<"span">(
      {
        ...{ "data-slot": "badge" },
        ...{ "data-variant": variant },
        ...{ "data-color": color },
        ...{ "data-size": size },
        className: cn(baseBadgeStyles({ variant, color, size }), className),
      },
      props,
    ),
  });
};

export namespace BaseBadge {
  export type Props = BaseBadgeProps;
  export type Variant = NonNullable<VariantProps<typeof baseBadgeStyles>["variant"]>;
  export type Color = NonNullable<VariantProps<typeof baseBadgeStyles>["color"]>;
  export type Size = NonNullable<VariantProps<typeof baseBadgeStyles>["size"]>;
}

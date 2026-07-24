"use client";

import { mergeProps, useRender } from "@base-ui/react";
import { type VariantProps, tv } from "tailwind-variants";

import { cn } from "~/ui/utils";

export const baseAlertStyles = tv({
  base: `
    [--z-alert-color:var(--primary)]
    relative grid w-full grid-cols-[0_1fr] items-start gap-y-1
    has-[>svg]:grid-cols-[1.25rem_1fr] has-[>svg]:gap-x-3
    rounded-lg border px-4 py-3 text-sm
    [&>svg]:col-start-1 [&>svg]:row-start-1 [&>svg]:size-4
    [&>svg]:translate-y-0.5 [&>svg]:shrink-0
    [&>svg]:text-[oklch(from_var(--z-alert-color)_l_c_h)]`,

  variants: {
    variant: {
      soft: `border-transparent
        text-[oklch(from_var(--z-alert-color)_l_c_h)]
        bg-[oklch(from_var(--z-alert-color)_l_c_h/10%)]`,
      outline: `bg-card text-card-foreground
        border-[oklch(from_var(--z-alert-color)_l_c_h/40%)]`,
    },

    color: {
      primary: "[--z-alert-color:var(--primary)]",
      success: "[--z-alert-color:var(--success)]",
      warning: "[--z-alert-color:var(--warning)]",
      destructive: "[--z-alert-color:var(--destructive)]",
      neutral: "[--z-alert-color:var(--muted-foreground)]",
    },
  },

  defaultVariants: {
    variant: "soft",
    color: "primary",
  },
});

export interface BaseAlertRootProps
  extends
    Omit<useRender.ComponentProps<"div">, "color">,
    VariantProps<typeof baseAlertStyles> {}

export const BaseAlertRoot = ({
  className,
  variant = "soft",
  color,
  render,
  ...props
}: BaseAlertRootProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        role: "alert",
        ...{ "data-slot": "alert" },
        ...{ "data-variant": variant },
        ...{ "data-color": color },
        className: cn(baseAlertStyles({ variant, color }), className),
      },
      props,
    ),
  });
};

export namespace BaseAlertRoot {
  export type Props = BaseAlertRootProps;
  export type Variant = NonNullable<VariantProps<typeof baseAlertStyles>["variant"]>;
  export type Color = NonNullable<VariantProps<typeof baseAlertStyles>["color"]>;
}

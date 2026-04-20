"use client";

import { Button as PrimitiveButton } from "@base-ui/react";
import { type VariantProps, tv } from "tailwind-variants";

import { type ClassValueState, cnState } from "~/ui/utils";

export const baseButtonStyles = tv({
  base: `
    [--tw-shadow-color:oklch(from_var(--z-button-color)_l_c_h/20%)]
    [--z-button-lightness:l]
    hover:[--z-button-lightness:52%]
    active:[--z-button-lightness:55%]
    hover:[--z-button-opacity:15%]
    active:[--z-button-opacity:20%]
    inline-flex items-center justify-center gap-1 shrink-0
    whitespace-nowrap text-sm font-medium
    rounded-sm cursor-pointer
    transition-all
    data-disabled:pointer-events-none data-disabled:opacity-50
    [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0
    focus-visible:ring-3 outline-none
    aria-invalid:ring-3 aria-invalid:ring-destructive/35
    focus-visible:aria-invalid:ring-destructive/50
    ring-[oklch(from_var(--z-button-color)_l_c_h/50%)] data-disabled:ring-0`,

  variants: {
    variant: {
      solid: `shadow-sm
        bg-[oklch(from_var(--z-button-color)_var(--z-button-lightness)_c_h)]`,
      outline: `border-2 shadow-sm
        text-[oklch(from_var(--z-button-color)_var(--z-button-lightness)_c_h)]
        border-[oklch(from_var(--z-button-color)_var(--z-button-lightness)_c_h)]
        hover:bg-[oklch(from_var(--z-button-color)_l_c_h/var(--z-button-opacity))]`,
      ghost: `text-[oklch(from_var(--z-button-color)_var(--z-button-lightness)_c_h)]
        hover:bg-[oklch(from_var(--z-button-color)_l_c_h/var(--z-button-opacity))]`,
      link: `text-[oklch(from_var(--z-button-color)_var(--z-button-lightness)_c_h)]
        underline-offset-4 hover:underline`,
    },

    color: {
      primary: "[--z-button-color:var(--primary)]",
      success: "[--z-button-color:var(--success)]",
      warning: `[--z-button-color:var(--warning)]
        hover:[--z-button-lightness:61%]
        active:[--z-button-lightness:64%]`,
      destructive: "[--z-button-color:var(--destructive)]",
      neutral: "[--z-button-color:var(--muted-foreground)]",
    },

    size: {
      none: "",
      default:
        "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      xs: `h-6 gap-1 rounded-[min(var(--radius-md),10px)]
      px-2 text-xs in-data-[slot=button-group]:rounded-lg
      has-data-[icon=inline-end]:pr-1.5
      has-data-[icon=inline-start]:pl-1.5
      [&_svg:not([class*='size-'])]:size-3`,
      sm: `h-7 gap-1 rounded-[min(var(--radius-md),12px)]
      px-2.5
      text-[0.8rem]
      in-data-[slot=button-group]:rounded-lg
      has-data-[icon=inline-end]:pr-1.5
      has-data-[icon=inline-start]:pl-1.5
      [&_svg:not([class*='size-'])]:size-3.5`,
      lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      icon: "size-8",
      "icon-xs":
        "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
      "icon-sm":
        "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
      "icon-lg": "size-9",
    },
  },

  defaultVariants: {
    appearance: "solid",
    color: "primary",
    size: "default",
  },

  compoundVariants: [
    {
      color: "neutral",
      variant: "solid",
      className: "text-black",
    },
  ],
});

export interface BaseButtonProps
  extends
    Omit<PrimitiveButton.Props, "className">,
    VariantProps<typeof baseButtonStyles> {
  className?: ClassValueState<PrimitiveButton.State>;
}

export function BaseButton({
  className,
  variant = "solid",
  color,
  size = "default",
  ...props
}: BaseButtonProps) {
  return (
    <PrimitiveButton
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-color={color}
      className={cnState(
        baseButtonStyles({
          color,
          variant,
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}

export namespace BaseButton {
  export type Props = BaseButtonProps;
  export type State = PrimitiveButton.State;
}

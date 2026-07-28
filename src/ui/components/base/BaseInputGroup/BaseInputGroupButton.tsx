"use client";

import { type VariantProps, tv } from "tailwind-variants";

import { cnState } from "../../../utils";
import { BaseButton, type BaseButtonProps } from "../BaseButton";

const variants = tv({
  base: "flex items-center gap-2 text-sm shadow-none",

  variants: {
    size: {
      xs: "h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
      sm: "",
      "icon-xs": "size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0",
      "icon-sm": "size-8 p-0 has-[>svg]:p-0",
    },
  },

  defaultVariants: {
    size: "xs",
  },
});

export interface BaseInputGroupButtonProps
  extends Omit<BaseButtonProps, "size">, VariantProps<typeof variants> {}

export const BaseInputGroupButton = ({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: BaseInputGroupButtonProps) => {
  return (
    <BaseButton
      type={type}
      data-size={size}
      variant={variant}
      color="neutral"
      className={cnState(variants({ size }), className)}
      {...props}
    />
  );
};

export namespace BaseInputGroupButton {
  export type Props = BaseInputGroupButtonProps;
}

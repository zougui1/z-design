"use client";

import { tv, type VariantProps } from "tailwind-variants";

import { PrimitiveSwitch } from "../../primitives";

const thumbStyles = tv({
  base: `bg-background data-unchecked:bg-foreground pointer-events-none block
    size-4 rounded-full ring-0 transition-transform
    data-checked:translate-x-[calc(100%-2px)] data-unchecked:translate-x-0`,

  variants: {
    color: {
      default: "data-checked:bg-default-foreground",
      neutral: "data-checked:bg-neutral-light-foreground",
      primary: "data-checked:bg-primary-foreground",
      secondary: "data-checked:bg-secondary-foreground",
      success: "data-checked:bg-success-foreground",
      warning: "data-checked:bg-warning-foreground",
      destructive: "data-checked:bg-destructive-foreground",
      info: "data-checked:bg-info-foreground",
    },
  },

  defaultVariants: {
    color: "primary",
  },
});

export interface BaseSwitchThumbProps
  extends
    Omit<PrimitiveSwitch.Thumb.Props, "className">,
    VariantProps<typeof thumbStyles> {
  className?: string;
}

export const BaseSwitchThumb = ({
  className,
  color,
  ...props
}: BaseSwitchThumbProps) => {
  return (
    <PrimitiveSwitch.Thumb
      data-slot="switch-thumb"
      className={thumbStyles({ color, className })}
      {...props}
    />
  );
};

export namespace BaseSwitchThumb {
  export type Props = BaseSwitchThumbProps;
  export type State = PrimitiveSwitch.Thumb.State;
}

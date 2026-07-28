"use client";

import { tv, type VariantProps } from "tailwind-variants";

import { PrimitiveSwitch } from "../../primitives";

const rootStyles = tv({
  base: `peer bg-background-light inline-flex h-[1.15rem] w-8 shrink-0
    cursor-pointer items-center rounded-full shadow-xs transition-all
    data-disabled:pointer-events-none data-disabled:opacity-50
    focus-visible:outline-2 focus-visible:outline-offset-2
    aria-invalid:ring-3 aria-invalid:ring-destructive/35`,

  variants: {
    color: {
      default: "data-checked:bg-default focus-visible:outline-default/80!",
      neutral:
        "data-checked:bg-neutral-light focus-visible:outline-neutral-light/80!",
      primary: "data-checked:bg-primary focus-visible:outline-primary/80!",
      secondary:
        "data-checked:bg-secondary focus-visible:outline-secondary/80!",
      success: "data-checked:bg-success focus-visible:outline-success/80!",
      warning: "data-checked:bg-warning focus-visible:outline-warning/80!",
      destructive:
        "data-checked:bg-destructive focus-visible:outline-destructive/80!",
      info: "data-checked:bg-info focus-visible:outline-info/80!",
    },
  },

  defaultVariants: {
    color: "primary",
  },
});

export interface BaseSwitchRootProps
  extends
    Omit<PrimitiveSwitch.Root.Props, "className">,
    VariantProps<typeof rootStyles> {
  className?: string;
}

export const BaseSwitchRoot = ({
  className,
  color,
  ...props
}: BaseSwitchRootProps) => {
  return (
    <PrimitiveSwitch.Root
      data-slot="switch"
      className={rootStyles({ color, className })}
      {...props}
    />
  );
};

export namespace BaseSwitchRoot {
  export type Props = BaseSwitchRootProps;
  export type State = PrimitiveSwitch.Root.State;
}

import { useRender } from "@base-ui/react";
import { type VariantProps, tv } from "tailwind-variants";

const styles = tv({
  base: "container mx-auto min-h-screen px-6 py-4",

  variants: {
    variant: {
      solid: "bg-background-dark",
      transparent: "bg-background/85 shadow-x-xl! shadow-primary/10",
    },

    blur: {
      true: "backdrop-blur-xs",
    },
  },

  defaultVariants: {
    variant: "solid",
  },
});

export interface ContainerProps
  extends useRender.ComponentProps<"div">, VariantProps<typeof styles> {}

export const Container = ({
  variant,
  blur,
  className,
  render,
  ...props
}: ContainerProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: {
      ...props,
      className: styles({ variant, blur, className }),
    },
  });
};

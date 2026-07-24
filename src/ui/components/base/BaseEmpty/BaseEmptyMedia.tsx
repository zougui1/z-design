"use client";

import { mergeProps, useRender } from "@base-ui/react";
import { type VariantProps, tv } from "tailwind-variants";

import { cn } from "../../../utils";

export const baseEmptyMediaStyles = tv({
  base: "mb-2 flex shrink-0 items-center justify-center",
  variants: {
    variant: {
      default: "bg-transparent [&_svg:not([class*='size-'])]:size-8",
      icon: `bg-muted text-foreground size-12 rounded-lg
        [&_svg:not([class*='size-'])]:size-6`,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BaseEmptyMediaProps
  extends
    useRender.ComponentProps<"div">,
    VariantProps<typeof baseEmptyMediaStyles> {}

export const BaseEmptyMedia = ({
  className,
  variant = "default",
  render,
  ...props
}: BaseEmptyMediaProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "empty-media" },
        ...{ "data-variant": variant },
        className: cn(baseEmptyMediaStyles({ variant }), className),
      },
      props,
    ),
  });
};

export namespace BaseEmptyMedia {
  export type Props = BaseEmptyMediaProps;
  export type Variant = NonNullable<
    VariantProps<typeof baseEmptyMediaStyles>["variant"]
  >;
}

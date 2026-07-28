"use client";

import { mergeProps, useRender } from "@base-ui/react";
import { type VariantProps, tv } from "tailwind-variants";

import { cn } from "~/ui/utils";

export const baseButtonGroupStyles = tv({
  base: `flex w-fit items-stretch
    [&>*]:focus-visible:relative [&>*]:focus-visible:z-10`,

  variants: {
    orientation: {
      horizontal: `[&>*:not(:first-child)]:rounded-l-none
        [&>*:not(:first-child)]:border-l-0
        [&>*:not(:last-child)]:rounded-r-none`,
      vertical: `flex-col
        [&>*:not(:first-child)]:rounded-t-none
        [&>*:not(:first-child)]:border-t-0
        [&>*:not(:last-child)]:rounded-b-none`,
    },
  },

  defaultVariants: {
    orientation: "horizontal",
  },
});

export interface BaseButtonGroupProps
  extends
    useRender.ComponentProps<"div">,
    VariantProps<typeof baseButtonGroupStyles> {}

export const BaseButtonGroup = ({
  className,
  orientation = "horizontal",
  render,
  ...props
}: BaseButtonGroupProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        role: "group",
        ...{ "data-slot": "button-group" },
        ...{ "data-orientation": orientation },
        className: cn(baseButtonGroupStyles({ orientation }), className),
      },
      props,
    ),
  });
};

export namespace BaseButtonGroup {
  export type Props = BaseButtonGroupProps;
  export type Orientation = NonNullable<
    VariantProps<typeof baseButtonGroupStyles>["orientation"]
  >;
}

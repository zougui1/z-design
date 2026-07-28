"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "~/ui/utils";

export interface BaseDrawerHeaderProps extends useRender.ComponentProps<"div"> {}

export const BaseDrawerHeader = ({
  className,
  render,
  ...props
}: BaseDrawerHeaderProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "drawer-header" },
        className: cn(
          `flex flex-col gap-0.5 p-4
          group-data-[swipe-direction=bottom]/drawer-popup:text-center
          group-data-[swipe-direction=top]/drawer-popup:text-center md:gap-0.5 md:text-left`,
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseDrawerHeader {
  export type Props = BaseDrawerHeaderProps;
}

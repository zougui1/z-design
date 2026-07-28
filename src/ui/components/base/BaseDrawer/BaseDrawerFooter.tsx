"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "~/ui/utils";

export interface BaseDrawerFooterProps extends useRender.ComponentProps<"div"> {}

export const BaseDrawerFooter = ({
  className,
  render,
  ...props
}: BaseDrawerFooterProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "drawer-footer" },
        className: cn("mt-auto flex flex-col gap-2 p-4", className),
      },
      props,
    ),
  });
};

export namespace BaseDrawerFooter {
  export type Props = BaseDrawerFooterProps;
}

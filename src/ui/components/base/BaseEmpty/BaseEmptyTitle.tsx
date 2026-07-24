"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseEmptyTitleProps
  extends useRender.ComponentProps<"div"> {}

export const BaseEmptyTitle = ({
  className,
  render,
  ...props
}: BaseEmptyTitleProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "empty-title" },
        className: cn(
          "cn-font-heading text-lg font-medium tracking-tight",
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseEmptyTitle {
  export type Props = BaseEmptyTitleProps;
}

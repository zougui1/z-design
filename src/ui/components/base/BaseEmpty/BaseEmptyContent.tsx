"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseEmptyContentProps
  extends useRender.ComponentProps<"div"> {}

export const BaseEmptyContent = ({
  className,
  render,
  ...props
}: BaseEmptyContentProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "empty-content" },
        className: cn(
          `flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm
          text-balance`,
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseEmptyContent {
  export type Props = BaseEmptyContentProps;
}

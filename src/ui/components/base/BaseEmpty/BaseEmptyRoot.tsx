"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseEmptyRootProps
  extends useRender.ComponentProps<"div"> {}

export const BaseEmptyRoot = ({
  className,
  render,
  ...props
}: BaseEmptyRootProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "empty" },
        className: cn(
          `flex min-w-0 flex-1 flex-col items-center justify-center gap-6
          rounded-lg p-6 text-center text-balance md:p-12`,
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseEmptyRoot {
  export type Props = BaseEmptyRootProps;
}

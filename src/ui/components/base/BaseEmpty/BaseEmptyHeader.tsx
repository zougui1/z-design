"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseEmptyHeaderProps
  extends useRender.ComponentProps<"div"> {}

export const BaseEmptyHeader = ({
  className,
  render,
  ...props
}: BaseEmptyHeaderProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "empty-header" },
        className: cn(
          "flex max-w-sm flex-col items-center gap-2 text-center",
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseEmptyHeader {
  export type Props = BaseEmptyHeaderProps;
}

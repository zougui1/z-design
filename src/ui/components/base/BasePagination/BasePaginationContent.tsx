"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BasePaginationContentProps extends useRender.ComponentProps<"ul"> {}

export const BasePaginationContent = ({
  className,
  render,
  ...props
}: BasePaginationContentProps) => {
  return useRender({
    defaultTagName: "ul",
    render,
    props: mergeProps<"ul">(
      {
        ...{ "data-slot": "pagination-content" },
        className: cn("flex items-center gap-0.5", className),
      },
      props,
    ),
  });
};

export namespace BasePaginationContent {
  export type Props = BasePaginationContentProps;
}

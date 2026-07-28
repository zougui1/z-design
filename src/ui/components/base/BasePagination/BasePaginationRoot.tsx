"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BasePaginationRootProps extends useRender.ComponentProps<"nav"> {}

export const BasePaginationRoot = ({
  className,
  render,
  ...props
}: BasePaginationRootProps) => {
  return useRender({
    defaultTagName: "nav",
    render,
    props: mergeProps<"nav">(
      {
        ...{ "data-slot": "pagination-root" },
        role: "navigation",
        "aria-label": "pagination",
        className: cn("mx-auto flex w-full justify-center", className),
      },
      props,
    ),
  });
};

export namespace BasePaginationRoot {
  export type Props = BasePaginationRootProps;
}

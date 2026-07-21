"use client";

import { mergeProps, useRender } from "@base-ui/react";

export interface BasePaginationItemProps extends useRender.ComponentProps<"li"> {}

export const BasePaginationItem = ({
  className,
  render,
  ...props
}: BasePaginationItemProps) => {
  return useRender({
    defaultTagName: "li",
    render,
    props: mergeProps<"li">(
      {
        ...{ "data-slot": "pagination-item" },
        className,
      },
      props,
    ),
  });
};

export namespace BasePaginationItem {
  export type Props = BasePaginationItemProps;
}

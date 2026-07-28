"use client";

import { mergeProps, useRender } from "@base-ui/react";
import { MoreHorizontal } from "lucide-react";

import { cn } from "../../../utils";

export interface BasePaginationEllipsisProps extends useRender.ComponentProps<"span"> {}

export const BasePaginationEllipsis = ({
  className,
  render,
  ...props
}: BasePaginationEllipsisProps) => {
  return useRender({
    defaultTagName: "span",
    render,
    props: mergeProps<"span">(
      {
        ...{ "data-slot": "pagination-ellipsis" },
        "aria-hidden": true,
        className: cn("flex size-8 items-center justify-center", className),
        children: (
          <>
            <MoreHorizontal className="size-4" />
            <span className="sr-only">More pages</span>
          </>
        ),
      },
      props,
    ),
  });
};

export namespace BasePaginationEllipsis {
  export type Props = BasePaginationEllipsisProps;
}

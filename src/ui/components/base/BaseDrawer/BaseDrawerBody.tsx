"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "~/ui/utils";

export interface BaseDrawerBodyProps extends useRender.ComponentProps<"div"> {}

export const BaseDrawerBody = ({
  className,
  render,
  ...props
}: BaseDrawerBodyProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "drawer-body" },
        className: cn("mt-auto flex flex-col gap-2 p-4", className),
      },
      props,
    ),
  });
};

export namespace BaseDrawerBody {
  export type Props = BaseDrawerBodyProps;
}

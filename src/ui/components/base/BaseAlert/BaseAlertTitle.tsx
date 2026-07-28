"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseAlertTitleProps
  extends useRender.ComponentProps<"div"> {}

export const BaseAlertTitle = ({
  className,
  render,
  ...props
}: BaseAlertTitleProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "alert-title" },
        className: cn(
          "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseAlertTitle {
  export type Props = BaseAlertTitleProps;
}

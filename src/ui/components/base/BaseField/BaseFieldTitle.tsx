"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseFieldTitleProps extends useRender.ComponentProps<"div"> {}

export const BaseFieldTitle = ({
  className,
  render,
  ...props
}: BaseFieldTitleProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "field-title" },
        className: cn(
          "flex w-fit items-center gap-2 text-sm font-medium group-data-[disabled=true]/field:opacity-50",
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseFieldTitle {
  export type Props = BaseFieldTitleProps;
}

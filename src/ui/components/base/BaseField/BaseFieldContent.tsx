"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseFieldContentProps extends useRender.ComponentProps<"div"> {}

export const BaseFieldContent = ({
  className,
  render,
  ...props
}: BaseFieldContentProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "field-content" },
        className: cn(
          "group/field-content flex flex-1 flex-col gap-0.5 leading-snug",
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseFieldContent {
  export type Props = BaseFieldContentProps;
}

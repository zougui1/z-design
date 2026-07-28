"use client";
import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseCardContentProps extends useRender.ComponentProps<"div"> {}

export const BaseCardContent = ({
  className,
  render,
  ...props
}: BaseCardContentProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "card-content" },
        className: cn("px-6", className),
      },
      props,
    ),
  });
};

export namespace BaseCardContent {
  export type Props = BaseCardContentProps;
}

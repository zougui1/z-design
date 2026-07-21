"use client";
import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseCardFooterProps extends useRender.ComponentProps<"div"> {}

export const BaseCardFooter = ({
  className,
  render,
  ...props
}: BaseCardFooterProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "card-footer" },
        className: cn("flex items-center px-6 [.border-t]:pt-6", className),
      },
      props,
    ),
  });
};

export namespace BaseCardFooter {
  export type Props = BaseCardFooterProps;
}

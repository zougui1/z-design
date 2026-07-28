"use client";
import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BasePopoverFooterProps
  extends useRender.ComponentProps<"div"> {}

export const BasePopoverFooter = ({
  className,
  render,
  ...props
}: BasePopoverFooterProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "popover-footer" },
        className: cn(
          "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BasePopoverFooter {
  export type Props = BasePopoverFooterProps;
}

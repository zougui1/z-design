"use client";
import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BasePopoverHeaderProps
  extends useRender.ComponentProps<"div"> {}

export const BasePopoverHeader = ({
  className,
  render,
  ...props
}: BasePopoverHeaderProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "popover-header" },
        className: cn("flex flex-col gap-2", className),
      },
      props,
    ),
  });
};

export namespace BasePopoverHeader {
  export type Props = BasePopoverHeaderProps;
}

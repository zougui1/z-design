"use client";
import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseDialogHeaderProps extends useRender.ComponentProps<"div"> {}

export const BaseDialogHeader = ({
  className,
  render,
  ...props
}: BaseDialogHeaderProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "dialog-header" },
        className: cn("flex flex-col gap-2", className),
      },
      props,
    ),
  });
};

export namespace BaseDialogHeader {
  export type Props = BaseDialogHeaderProps;
}

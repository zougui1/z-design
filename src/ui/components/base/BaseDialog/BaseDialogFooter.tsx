"use client";
import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseDialogFooterProps extends useRender.ComponentProps<"div"> {}

export const BaseDialogFooter = ({
  className,
  render,
  ...props
}: BaseDialogFooterProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "dialog-footer" },
        className: cn(
          "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end",
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseDialogFooter {
  export type Props = BaseDialogFooterProps;
}

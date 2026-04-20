"use client";
import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseAlertDialogFooterProps extends useRender.ComponentProps<"div"> {}

export const BaseAlertDialogFooter = ({
  className,
  render,
  ...props
}: BaseAlertDialogFooterProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "alert-dialog-footer" },
        className: cn(
          `-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl
          border-t bg-muted/50 p-4 group-data-[size=sm]/alert-dialog-popup:grid
          group-data-[size=sm]/alert-dialog-popup:grid-cols-2
          sm:flex-row sm:justify-end`,
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseAlertDialogFooter {
  export type Props = BaseAlertDialogFooterProps;
}

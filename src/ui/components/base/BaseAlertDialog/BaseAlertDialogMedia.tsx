"use client";
import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseAlertDialogMediaProps extends useRender.ComponentProps<"div"> {}

export const BaseAlertDialogMedia = ({
  className,
  render,
  ...props
}: BaseAlertDialogMediaProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "alert-dialog-media" },
        className: cn(
          `mb-2 inline-flex size-10 items-center justify-center rounded-md
          bg-muted sm:group-data-[size=default]/alert-dialog-popup:row-span-2
          *:[svg:not([class*='size-'])]:size-6`,
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseAlertDialogMedia {
  export type Props = BaseAlertDialogMediaProps;
}

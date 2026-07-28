"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseAlertDescriptionProps
  extends useRender.ComponentProps<"div"> {}

export const BaseAlertDescription = ({
  className,
  render,
  ...props
}: BaseAlertDescriptionProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "alert-description" },
        className: cn(
          `col-start-2 grid justify-items-start gap-1 text-sm opacity-90
          *:[a]:underline *:[a]:underline-offset-3 [&_p]:leading-relaxed`,
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseAlertDescription {
  export type Props = BaseAlertDescriptionProps;
}

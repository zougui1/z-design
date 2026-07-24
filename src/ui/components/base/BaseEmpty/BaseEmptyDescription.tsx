"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseEmptyDescriptionProps
  extends useRender.ComponentProps<"div"> {}

export const BaseEmptyDescription = ({
  className,
  render,
  ...props
}: BaseEmptyDescriptionProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "empty-description" },
        className: cn(
          `text-muted-foreground *:[a]:hover:text-foreground text-sm/relaxed
          *:[a]:underline *:[a]:underline-offset-3`,
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseEmptyDescription {
  export type Props = BaseEmptyDescriptionProps;
}

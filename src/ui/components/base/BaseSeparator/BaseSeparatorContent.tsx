"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseSeparatorContentProps extends useRender.ComponentProps<"span"> {}

export const BaseSeparatorContent = ({
  className,
  render,
  ...props
}: BaseSeparatorContentProps) => {
  return useRender({
    defaultTagName: "span",
    render,
    props: mergeProps<"span">(
      {
        ...{ "data-slot": "separator-content" },
        className: cn(
          "relative mx-auto block w-fit bg-background px-2 text-muted-foreground",
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseSeparatorContent {
  export type Props = BaseSeparatorContentProps;
}

"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseSeparatorGroupProps extends useRender.ComponentProps<"div"> {}

export const BaseSeparatorGroup = ({
  className,
  render,
  ...props
}: BaseSeparatorGroupProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "separator-group" },
        className: cn(
          `relative -my-2 h-5 text-sm shrink-0 [&_*[data-slot=separator-root]]:absolute
          [&_*[data-slot=separator-root]]:inset-0 [&_*[data-slot=separator-root]]:top-1/2`,
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseSeparatorGroup {
  export type Props = BaseSeparatorGroupProps;
}

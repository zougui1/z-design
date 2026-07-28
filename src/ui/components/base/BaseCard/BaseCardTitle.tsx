"use client";
import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseCardTitleProps extends useRender.ComponentProps<"div"> {}

export const BaseCardTitle = ({
  className,
  render,
  ...props
}: BaseCardTitleProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "card-title" },
        className: cn("cn-font-heading leading-none font-semibold", className),
      },
      props,
    ),
  });
};

export namespace BaseCardTitle {
  export type Props = BaseCardTitleProps;
}

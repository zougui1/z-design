"use client";
import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseCardHeaderProps extends useRender.ComponentProps<"div"> {}

export const BaseCardHeader = ({
  className,
  render,
  ...props
}: BaseCardHeaderProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "card-header" },
        className: cn(
          `@container/card-header grid auto-rows-min
           items-start gap-1.5 px-6
           has-data-[slot=card-action]:grid-cols-[1fr_auto]
           has-data-[slot=card-description]:grid-rows-[auto_auto]
           [.border-b]:pb-6`,
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseCardHeader {
  export type Props = BaseCardHeaderProps;
}

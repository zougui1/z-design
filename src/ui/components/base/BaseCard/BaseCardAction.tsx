"use client";
import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseCardActionProps extends useRender.ComponentProps<"div"> {}

export const BaseCardAction = ({
  className,
  render,
  ...props
}: BaseCardActionProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "card-action" },
        className: cn(
          "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseCardAction {
  export type Props = BaseCardActionProps;
}

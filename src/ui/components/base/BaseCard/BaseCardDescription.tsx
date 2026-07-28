"use client";
import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseCardDescriptionProps
  extends useRender.ComponentProps<"div"> {}

export const BaseCardDescription = ({
  className,
  render,
  ...props
}: BaseCardDescriptionProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "card-description" },
        className: cn("text-muted-foreground text-sm", className),
      },
      props,
    ),
  });
};

export namespace BaseCardDescription {
  export type Props = BaseCardDescriptionProps;
}

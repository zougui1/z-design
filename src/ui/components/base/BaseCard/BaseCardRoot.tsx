"use client";
import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseCardRootProps extends useRender.ComponentProps<"div"> {}

export const BaseCardRoot = ({
  className,
  render,
  ...props
}: BaseCardRootProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "card" },
        className: cn(
          "bg-card text-card-foreground border-border flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseCardRoot {
  export type Props = BaseCardRootProps;
}

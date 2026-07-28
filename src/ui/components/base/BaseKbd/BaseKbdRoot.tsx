"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseKbdRootProps extends useRender.ComponentProps<"kbd"> {}

export const BaseKbdRoot = ({
  className,
  render,
  ...props
}: BaseKbdRootProps) => {
  return useRender({
    defaultTagName: "kbd",
    render,
    props: mergeProps<"kbd">(
      {
        ...{ "data-slot": "kbd" },
        className: cn(
          `bg-background-light text-muted-foreground border-border
          pointer-events-none inline-flex h-5 w-fit min-w-5 items-center
          justify-center gap-1 rounded-sm border px-1 font-sans text-xs
          font-medium select-none
          [&_svg:not([class*='size-'])]:size-3`,
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseKbdRoot {
  export type Props = BaseKbdRootProps;
}

"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseKbdGroupProps extends useRender.ComponentProps<"kbd"> {}

export const BaseKbdGroup = ({
  className,
  render,
  ...props
}: BaseKbdGroupProps) => {
  return useRender({
    defaultTagName: "kbd",
    render,
    props: mergeProps<"kbd">(
      {
        ...{ "data-slot": "kbd-group" },
        className: cn("inline-flex items-center gap-1", className),
      },
      props,
    ),
  });
};

export namespace BaseKbdGroup {
  export type Props = BaseKbdGroupProps;
}

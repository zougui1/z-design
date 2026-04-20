"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseInputGroupTextProps extends useRender.ComponentProps<"span"> {}

export const BaseInputGroupText = ({
  className,
  render,
  ...props
}: BaseInputGroupTextProps) => {
  return useRender({
    defaultTagName: "span",
    render,
    props: mergeProps<"span">(
      {
        ...{ "data-slot": "input-group-text" },
        className: cn(
          `flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none
          [&_svg:not([class*='size-'])]:size-4`,
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseInputGroupText {
  export type Props = BaseInputGroupTextProps;
}

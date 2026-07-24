"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "~/ui/utils";

export interface BaseAspectRatioProps
  extends useRender.ComponentProps<"div"> {
  /** Desired width / height ratio, e.g. `16 / 9`. @default 1 */
  ratio?: number;
}

export const BaseAspectRatio = ({
  ratio = 1,
  className,
  style,
  render,
  ...props
}: BaseAspectRatioProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "aspect-ratio" },
        className: cn("relative w-full", className),
        style: { aspectRatio: ratio, ...style },
      },
      props,
    ),
  });
};

export namespace BaseAspectRatio {
  export type Props = BaseAspectRatioProps;
}

"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "~/ui/utils";

export interface BaseDrawerHandleProps extends useRender.ComponentProps<"div"> {}

export const BaseDrawerHandle = ({
  className,
  render,
  ...props
}: BaseDrawerHandleProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "drawer-handle" },
        className: cn(
          "bg-muted rounded-full shrink-0 fixed",

          `group-data-[side=right]/drawer-viewport:my-auto
          group-data-[side=right]/drawer-viewport:top-1/2
          group-data-[side=right]/drawer-viewport:-translate-y-1/2
          group-data-[side=right]/drawer-viewport:ml-4
          group-data-[side=right]/drawer-viewport:w-1
          group-data-[side=right]/drawer-viewport:h-[100px]`,

          `group-data-[side=bottom]/drawer-viewport:mx-auto
          group-data-[side=bottom]/drawer-viewport:mt-4
          group-data-[side=bottom]/drawer-viewport:h-1
          group-data-[side=bottom]/drawer-viewport:w-[100px]
          group-data-[side=bottom]/drawer-viewport:left-1/2
          group-data-[side=bottom]/drawer-viewport:-translate-x-1/2`,

          `group-data-[side=left]/drawer-viewport:my-auto
          group-data-[side=left]/drawer-viewport:mr-4
          group-data-[side=left]/drawer-viewport:w-1
          group-data-[side=left]/drawer-viewport:h-[100px]
          group-data-[side=left]/drawer-viewport:top-1/2
          group-data-[side=left]/drawer-viewport:right-0
          group-data-[side=left]/drawer-viewport:-translate-y-1/2`,

          `group-data-[side=top]/drawer-viewport:mx-auto
          group-data-[side=top]/drawer-viewport:mb-4
          group-data-[side=top]/drawer-viewport:h-1
          group-data-[side=top]/drawer-viewport:w-[100px]
          group-data-[side=top]/drawer-viewport:left-1/2
          group-data-[side=top]/drawer-viewport:bottom-0
          group-data-[side=top]/drawer-viewport:-translate-x-1/2`,
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseDrawerHandle {
  export type Props = BaseDrawerHandleProps;
}

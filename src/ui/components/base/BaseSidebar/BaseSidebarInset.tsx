"use client";

import { useRender } from "@base-ui/react";

import { cn } from "~/ui/utils";

export interface BaseSidebarInsetProps extends useRender.ComponentProps<"main"> {}

export function BaseSidebarInset({
  className,
  render,
  ...props
}: BaseSidebarInsetProps) {
  return useRender({
    defaultTagName: "main",
    render,
    props: {
      "data-slot": "sidebar-inset",
      ...props,
      className: cn(
        "bg-background-dark relative flex w-full flex-1 flex-col",
        `md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0
        md:peer-data-[variant=inset]:rounded-xl
        md:peer-data-[variant=inset]:shadow-sm
        md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2`,
        className,
      ),
    },
  });
}

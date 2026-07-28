"use client";

import { useRender } from "@base-ui/react";

import { cn } from "~/ui/utils";

export interface BaseSidebarContentProps extends useRender.ComponentProps<"div"> {}

export function BaseSidebarContent({
  className,
  render,
  ...props
}: BaseSidebarContentProps) {
  return useRender({
    defaultTagName: "div",
    render,
    props: {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      ...props,
      className: cn(
        `flex min-h-0 flex-1 flex-col gap-2 overflow-x-hidden overflow-y-auto
        group-data-[collapsible=icon]:overflow-hidden`,
        className,
      ),
    },
  });
}

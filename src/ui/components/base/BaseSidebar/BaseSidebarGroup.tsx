"use client";

import { useRender } from "@base-ui/react";

import { cn } from "~/ui/utils";

export interface BaseSidebarGroupProps extends useRender.ComponentProps<"div"> {}

export function BaseSidebarGroup({
  className,
  render,
  ...props
}: BaseSidebarGroupProps) {
  return useRender({
    defaultTagName: "div",
    render,
    props: {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      ...props,
      className: cn("relative flex w-full min-w-0 flex-col p-2", className),
    },
  });
}

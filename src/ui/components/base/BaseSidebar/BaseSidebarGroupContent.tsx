"use client";

import { useRender } from "@base-ui/react";

import { cn } from "~/ui/utils";

export interface BaseSidebarGroupContentProps extends useRender.ComponentProps<"div"> {}

export function BaseSidebarGroupContent({
  className,
  render,
  ...props
}: BaseSidebarGroupContentProps) {
  return useRender({
    defaultTagName: "div",
    render,
    props: {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      ...props,
      className: cn("w-full text-sm", className),
    },
  });
}

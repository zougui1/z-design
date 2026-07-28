"use client";

import { useRender } from "@base-ui/react";

import { cn } from "~/ui/utils";

export interface BaseSidebarHeaderProps extends useRender.ComponentProps<"div"> {}

export function BaseSidebarHeader({
  className,
  render,
  ...props
}: BaseSidebarHeaderProps) {
  return useRender({
    defaultTagName: "div",
    render,
    props: {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      ...props,
      className: cn("flex flex-col gap-2 p-2", className),
    },
  });
}

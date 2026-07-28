"use client";

import { useRender } from "@base-ui/react";

import { cn } from "~/ui/utils";

export interface BaseSidebarGroupLabelProps extends useRender.ComponentProps<"div"> {}

export function BaseSidebarGroupLabel({
  className,
  render,
  ...props
}: BaseSidebarGroupLabelProps) {
  return useRender({
    defaultTagName: "div",
    render,
    props: {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      ...props,
      className: cn(
        `text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0
        items-center rounded-md px-2 text-xs font-medium outline-hidden
        transition-[margin,opacity] duration-200 ease-linear
        focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0`,
        `group-data-[collapsible=icon]:-mt-8
        group-data-[collapsible=icon]:opacity-0`,
        className,
      ),
    },
  });
}

"use client";

import { useRender } from "@base-ui/react";

import { cn } from "~/ui/utils";

export interface BaseSidebarMenuProps extends useRender.ComponentProps<"ul"> {}

export function BaseSidebarMenu({ className, render, ...props }: BaseSidebarMenuProps) {
  return useRender({
    defaultTagName: "ul",
    render,
    props: {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      ...props,
      className: cn("flex w-full min-w-0 flex-col gap-1", className),
    },
  });
}

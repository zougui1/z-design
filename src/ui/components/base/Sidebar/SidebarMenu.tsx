import { useRender } from "@base-ui/react";

import { cn } from "~/ui/utils";

export interface SidebarMenuProps extends useRender.ComponentProps<"ul"> {}

export function SidebarMenu({ className, render, ...props }: SidebarMenuProps) {
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

import { useRender } from "@base-ui/react";

import { cn } from "~/ui/utils";

export interface SidebarContentProps extends useRender.ComponentProps<"div"> {}

export function SidebarContent({
  className,
  render,
  ...props
}: SidebarContentProps) {
  return useRender({
    defaultTagName: "div",
    render,
    props: {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      ...props,
      className: cn(
        `flex min-h-0 flex-1 flex-col gap-2 overflow-auto
        group-data-[collapsible=icon]:overflow-hidden`,
        className,
      ),
    },
  });
}

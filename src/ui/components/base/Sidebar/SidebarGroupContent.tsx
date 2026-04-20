import { useRender } from "@base-ui/react";

import { cn } from "~/ui/utils";

export interface SidebarGroupContentProps extends useRender.ComponentProps<"div"> {}

export function SidebarGroupContent({
  className,
  render,
  ...props
}: SidebarGroupContentProps) {
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

import { useRender } from "@base-ui/react";

import { cn } from "~/ui/utils";

export interface SidebarFooterProps extends useRender.ComponentProps<"div"> {}

export function SidebarFooter({
  className,
  render,
  ...props
}: SidebarFooterProps) {
  return useRender({
    defaultTagName: "div",
    render,
    props: {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      ...props,
      className: cn("flex flex-col gap-2 p-2", className),
    },
  });
}

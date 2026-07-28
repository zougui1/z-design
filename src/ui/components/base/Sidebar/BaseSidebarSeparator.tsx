import { cn } from "~/ui/utils";

import { BaseSeparator } from "../BaseSeparator";

export interface BaseSidebarSeparatorProps extends BaseSeparator.Root.Props {}

export function BaseSidebarSeparator({
  className,
  ...props
}: BaseSidebarSeparatorProps) {
  return (
    <BaseSeparator.Root
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("bg-sidebar-border mx-2 w-auto", className)}
      {...props}
    />
  );
}

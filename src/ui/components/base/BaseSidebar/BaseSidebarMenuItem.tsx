import { cn } from "~/ui/utils";

export interface BaseSidebarMenuItemProps extends React.ComponentProps<"li"> {}

export function BaseSidebarMenuItem({ className, ...props }: BaseSidebarMenuItemProps) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  );
}

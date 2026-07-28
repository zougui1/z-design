import { cn } from "~/ui/utils";

export interface BaseSidebarMenuSubItemProps extends React.ComponentProps<"li"> {}

export function BaseSidebarMenuSubItem({
  className,
  ...props
}: BaseSidebarMenuSubItemProps) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("group/menu-sub-item relative", className)}
      {...props}
    />
  );
}

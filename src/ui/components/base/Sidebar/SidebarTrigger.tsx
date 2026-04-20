"use client";

import { PanelLeftIcon } from "lucide-react";

import { cn } from "~/ui/utils";

import { BaseButton, type BaseButtonProps } from "../BaseButton";
import { useSidebar } from "./context";

export type SidebarTriggerProps = BaseButtonProps;

export function SidebarTrigger({
  className,
  onClick,
  ...props
}: SidebarTriggerProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <BaseButton
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </BaseButton>
  );
}

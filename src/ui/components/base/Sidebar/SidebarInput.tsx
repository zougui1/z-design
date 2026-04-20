import { cn } from "~/ui/utils";

import { BaseInput, type BaseInputProps } from "../BaseInput";

export interface SidebarInputProps extends BaseInputProps {}

export function SidebarInput({ className, ...props }: SidebarInputProps) {
  return (
    <BaseInput
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("bg-background h-8 w-full shadow-none", className)}
      {...props}
    />
  );
}

import { cn } from "~/ui/utils";

import { BaseInput, type BaseInputProps } from "../BaseInput";

export interface BaseSidebarInputProps extends BaseInputProps {}

export function BaseSidebarInput({ className, ...props }: BaseSidebarInputProps) {
  return (
    <BaseInput
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("bg-background h-8 w-full shadow-none", className)}
      {...props}
    />
  );
}

"use client";

import { Toast as BaseToast } from "@base-ui/react";

import { cn } from "~/ui/utils";

export interface BaseToastContentProps extends BaseToast.Content.Props {}

export function BaseToastContent({ className, ...props }: BaseToastContentProps) {
  return (
    <BaseToast.Content
      data-slot="toast-content"
      className={cn(
        "overflow-hidden transition-opacity",
        "data-behind:opacity-0",
        "data-expanded:opacity-100",
        className,
      )}
      {...props}
    />
  );
}

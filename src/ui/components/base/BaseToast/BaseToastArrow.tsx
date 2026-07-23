"use client";

import { Toast as BaseToast } from "@base-ui/react";

import { cn } from "~/ui/utils";

export interface BaseToastArrowProps extends BaseToast.Arrow.Props {}

export function BaseToastArrow({ className, ...props }: BaseToastArrowProps) {
  return (
    <BaseToast.Arrow
      data-slot="toast-arrow"
      className={cn("", className)}
      {...props}
    />
  );
}

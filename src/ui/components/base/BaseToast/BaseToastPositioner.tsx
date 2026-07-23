"use client";

import { Toast as BaseToast } from "@base-ui/react";

import { cn } from "~/ui/utils";

export interface BaseToastPositionerProps extends BaseToast.Positioner.Props {}

export function BaseToastPositioner({ className, ...props }: BaseToastPositionerProps) {
  return (
    <BaseToast.Positioner
      data-slot="toast-positioner"
      className={cn("", className)}
      {...props}
    />
  );
}

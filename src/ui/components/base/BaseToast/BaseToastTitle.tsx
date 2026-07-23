"use client";

import { Toast as BaseToast } from "@base-ui/react";

import { cn } from "~/ui/utils";

export interface BaseToastTitleProps extends BaseToast.Title.Props {}

export function BaseToastTitle({ className, ...props }: BaseToastTitleProps) {
  return (
    <BaseToast.Title
      data-slot="toast-title"
      className={cn("m-0 text-base font-medium", className)}
      {...props}
    />
  );
}

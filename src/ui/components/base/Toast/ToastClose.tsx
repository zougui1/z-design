"use client";

import { Toast as BaseToast } from "@base-ui/react";

import { cn } from "~/ui/utils";

import { BaseButton } from "../BaseButton";

export interface ToastCloseProps extends BaseToast.Close.Props {}

export function ToastClose({ className, ...props }: ToastCloseProps) {
  return (
    <BaseToast.Close
      data-slot="toast-close"
      render={<BaseButton variant="ghost" />}
      className={cn("absolute top-2 right-2 size-5 p-0!", className)}
      {...props}
    />
  );
}

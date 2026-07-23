"use client";

import { Toast as BaseToast } from "@base-ui/react";

import { cn } from "~/ui/utils";

export interface BaseToastActionProps extends BaseToast.Action.Props {}

export function BaseToastAction({ className, ...props }: BaseToastActionProps) {
  return (
    <BaseToast.Action
      data-slot="toast-action"
      className={cn("", className)}
      {...props}
    />
  );
}

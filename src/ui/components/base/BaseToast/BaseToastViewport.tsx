"use client";

import { Toast as BaseToast } from "@base-ui/react";

import { cn } from "~/ui/utils";

export interface BaseToastViewportProps extends BaseToast.Viewport.Props {}

export function BaseToastViewport({ className, ...props }: BaseToastViewportProps) {
  return (
    <BaseToast.Viewport
      data-slot="toast-viewport"
      className={cn(
        `fixed top-auto right-4 bottom-4 left-auto z-10 m-[0_auto] w-[250px]
        sm:right-8 sm:bottom-8`,
        className,
      )}
      {...props}
    />
  );
}

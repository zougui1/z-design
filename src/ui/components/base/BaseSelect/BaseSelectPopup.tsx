"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";

import { cnState } from "~/ui/utils";

export interface BaseSelectPopupProps extends SelectPrimitive.Popup.Props {}
export type BaseSelectPopupState = SelectPrimitive.Popup.State;

export function BaseSelectPopup({ className, ...props }: BaseSelectPopupProps) {
  return (
    <SelectPrimitive.Popup
      data-slot="select-popup"
      className={cnState(
        `bg-background-light border-border text-popover-foreground
        data-open:animate-in data-closed:animate-out data-closed:fade-out-0
        data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95
        data-[side=bottom]:slide-in-from-top-2
        data-[side=left]:slide-in-from-right-2
        data-[side=right]:slide-in-from-left-2
        data-[side=top]:slide-in-from-bottom-2 ring-foreground/10
        data-[side=inline-start]:slide-in-from-right-2
        data-[side=inline-end]:slide-in-from-left-2 relative isolate z-50
        max-h-(--available-height) min-w-[calc(var(--anchor-width)+2px)]
        origin-(--transform-origin) -translate-x-1 -translate-y-0.5
        overflow-x-hidden overflow-y-auto rounded-sm border bg-clip-padding
        shadow-md ring-1 outline-hidden duration-100
        data-[align-trigger=true]:animate-none`,
        className,
      )}
      {...props}
    />
  );
}

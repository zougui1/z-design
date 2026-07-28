"use client";

import { cnState } from "../../../utils";
import { PrimitivePopover } from "../../primitives";

export interface BaseDatePickerPopupProps
  extends PrimitivePopover.Popup.Props {}

export const BaseDatePickerPopup = ({
  className,
  ...props
}: BaseDatePickerPopupProps) => {
  return (
    <PrimitivePopover.Popup
      data-slot="date-picker-popup"
      className={cnState(
        `bg-background-light border-border text-popover-foreground ring-foreground/10
        data-open:animate-in data-closed:animate-out data-closed:fade-out-0
        data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95
        data-[side=bottom]:slide-in-from-top-2
        data-[side=left]:slide-in-from-right-2
        data-[side=right]:slide-in-from-left-2
        data-[side=top]:slide-in-from-bottom-2
        data-[side=inline-start]:slide-in-from-right-2
        data-[side=inline-end]:slide-in-from-left-2 relative isolate z-50
        origin-(--transform-origin) overflow-hidden rounded-md border
        bg-clip-padding shadow-md ring-1 outline-hidden duration-100`,
        className,
      )}
      {...props}
    />
  );
};

export namespace BaseDatePickerPopup {
  export type Props = BaseDatePickerPopupProps;
  export type State = PrimitivePopover.Popup.State;
}

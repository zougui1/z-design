"use client";

import { cnState } from "../../../utils";
import { PrimitiveContextMenu } from "../../primitives";

export interface BaseContextMenuPopupProps extends PrimitiveContextMenu.Popup.Props {}

export type BaseContextMenuPopupState = PrimitiveContextMenu.Popup.State;

export const BaseContextMenuPopup = ({ className, ...props }: BaseContextMenuPopupProps) => {
  return (
    <PrimitiveContextMenu.Popup
      data-slot="context-menu-popup"
      {...props}
      className={cnState(
        `bg-popover text-popover-foreground ring-foreground/10
        data-[side=bottom]:slide-in-from-top-2
        data-[side=inline-end]:slide-in-from-left-2
        data-[side=inline-start]:slide-in-from-right-2
        data-[side=left]:slide-in-from-right-2
        data-[side=right]:slide-in-from-left-2
        data-[side=top]:slide-in-from-bottom-2 data-open:animate-in
        data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out
        data-closed:fade-out-0 data-closed:zoom-out-95 z-50
        max-h-(--available-height) w-(--anchor-width) min-w-32
        origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg
        p-1 shadow-md ring-1 duration-100 outline-none
        data-closed:overflow-hidden`,
        className,
      )}
    />
  );
};

export namespace BaseContextMenuPopup {
  export type Props = BaseContextMenuPopupProps;
  export type State = BaseContextMenuPopupState;
}

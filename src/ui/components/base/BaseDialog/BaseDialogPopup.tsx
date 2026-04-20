"use client";
import { cnState } from "../../../utils";
import { PrimitiveDialog } from "../../primitives";

export interface BaseDialogPopupProps extends PrimitiveDialog.Popup.Props {}

export type BaseDialogPopupState = PrimitiveDialog.Popup.State;

export const BaseDialogPopup = ({
  className,
  ...props
}: BaseDialogPopupProps) => {
  return (
    <PrimitiveDialog.Popup
      data-slot="dialog-popup"
      {...props}
      className={cnState(
        `bg-popover text-popover-foreground ring-foreground/10 fixed
        top-[calc(50%+1.25rem*var(--nested-dialogs))] left-1/2 z-50 -mt-8 grid
        w-full max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2
        scale-[calc(1-0.1*var(--nested-dialogs))] gap-4 rounded-lg p-4 text-sm
        ring-1 transition-all duration-150 outline-none
        data-ending-style:scale-90 data-ending-style:opacity-0
        data-nested-dialog-open:after:absolute
        data-nested-dialog-open:after:inset-0
        data-nested-dialog-open:after:rounded-[inherit]
        data-nested-dialog-open:after:bg-black/10 data-starting-style:scale-90
        data-starting-style:opacity-0 sm:max-w-sm`,
        className,
      )}
    />
  );
};

export namespace BaseDialogPopup {
  export type Props = BaseDialogPopupProps;
  export type State = BaseDialogPopupState;
}

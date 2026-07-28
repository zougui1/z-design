"use client";
import { cnState } from "../../../utils";
import { PrimitiveAlertDialog } from "../../primitives";

export interface BaseAlertDialogPopupProps
  extends PrimitiveAlertDialog.Popup.Props {
  size?: "default" | "sm";
}

export type BaseAlertDialogPopupState = PrimitiveAlertDialog.Popup.State;

export const BaseAlertDialogPopup = ({
  className,
  size = "default",
  ...props
}: BaseAlertDialogPopupProps) => {
  return (
    <PrimitiveAlertDialog.Popup
      data-slot="alert-dialog-popup"
      data-size={size}
      {...props}
      className={cnState(
        `group/alert-dialog-popup bg-popover text-popover-foreground
        ring-foreground/10 fixed top-[calc(50%+1.25rem*var(--nested-dialogs))]
        left-1/2 z-50 -mt-8 grid w-full max-w-[calc(100vw-3rem)]
        -translate-x-1/2 -translate-y-1/2
        scale-[calc(1-0.1*var(--nested-dialogs))] gap-4 rounded-lg p-4 ring-1
        transition-all duration-150 outline-none data-ending-style:scale-90
        data-ending-style:opacity-0 data-nested-dialog-open:after:absolute
        data-nested-dialog-open:after:inset-0
        data-nested-dialog-open:after:rounded-[inherit]
        data-nested-dialog-open:after:bg-black/5 data-starting-style:scale-90
        data-starting-style:opacity-0 data-[size=default]:max-w-xs
        data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-sm`,
        className,
      )}
    />
  );
};

export namespace BaseAlertDialogPopup {
  export type Props = BaseAlertDialogPopupProps;
  export type State = BaseAlertDialogPopupState;
}

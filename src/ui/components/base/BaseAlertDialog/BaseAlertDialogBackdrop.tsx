"use client";
import { cnState } from "../../../utils";
import { PrimitiveAlertDialog } from "../../primitives";

export interface BaseAlertDialogBackdropProps
  extends PrimitiveAlertDialog.Backdrop.Props {}

export type BaseAlertDialogBackdropState = PrimitiveAlertDialog.Backdrop.State;

export const BaseAlertDialogBackdrop = ({
  className,
  ...props
}: BaseAlertDialogBackdropProps) => {
  return (
    <PrimitiveAlertDialog.Backdrop
      data-slot="alert-dialog-backdrop"
      {...props}
      className={cnState(
        `fixed inset-0 isolate z-50 bg-black/70 transition-all duration-150
        data-ending-style:opacity-0 data-starting-style:opacity-0
        supports-backdrop-filter:backdrop-blur-xs
        supports-[-webkit-touch-callout:none]:absolute`,
        className,
      )}
    />
  );
};

export namespace BaseAlertDialogBackdrop {
  export type Props = BaseAlertDialogBackdropProps;
  export type State = BaseAlertDialogBackdropState;
}

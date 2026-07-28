"use client";
import { cnState } from "../../../utils";
import { PrimitiveDialog } from "../../primitives";

export interface BaseDialogBackdropProps
  extends PrimitiveDialog.Backdrop.Props {}

export type BaseDialogBackdropState = PrimitiveDialog.Backdrop.State;

export const BaseDialogBackdrop = ({
  className,
  ...props
}: BaseDialogBackdropProps) => {
  return (
    <PrimitiveDialog.Backdrop
      data-slot="dialog-backdrop"
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

export namespace BaseDialogBackdrop {
  export type Props = BaseDialogBackdropProps;
  export type State = BaseDialogBackdropState;
}

"use client";
import { PrimitiveAlertDialog } from "../../primitives";

export interface BaseAlertDialogCloseProps
  extends PrimitiveAlertDialog.Close.Props {}

export type BaseAlertDialogCloseState = PrimitiveAlertDialog.Close.State;

export const BaseAlertDialogClose = (props: BaseAlertDialogCloseProps) => {
  return (
    <PrimitiveAlertDialog.Close data-slot="alert-dialog-close" {...props} />
  );
};

export namespace BaseAlertDialogClose {
  export type Props = BaseAlertDialogCloseProps;
  export type State = BaseAlertDialogCloseState;
}

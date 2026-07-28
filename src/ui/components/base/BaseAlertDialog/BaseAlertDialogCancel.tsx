"use client";
import { PrimitiveAlertDialog } from "../../primitives";
import { BaseButton, type BaseButtonProps } from "../BaseButton";

export interface BaseAlertDialogCancelProps extends BaseButtonProps {}

export type BaseAlertDialogCancelState = PrimitiveAlertDialog.Close.State;

export const BaseAlertDialogCancel = ({
  variant = "outline",
  ...props
}: BaseAlertDialogCancelProps) => {
  return (
    <PrimitiveAlertDialog.Close
      data-slot="alert-dialog-cancel"
      render={<BaseButton {...props} variant={variant} />}
    />
  );
};

export namespace BaseAlertDialogCancel {
  export type Props = BaseAlertDialogCancelProps;
  export type State = BaseAlertDialogCancelState;
}

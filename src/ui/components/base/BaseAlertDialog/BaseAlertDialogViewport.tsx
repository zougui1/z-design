"use client";
import { cnState } from "../../../utils";
import { PrimitiveAlertDialog } from "../../primitives";

export interface BaseAlertDialogViewportProps extends PrimitiveAlertDialog.Viewport.Props {}

export type BaseAlertDialogViewportState = PrimitiveAlertDialog.Viewport.State;

export const BaseAlertDialogViewport = ({
  className,
  ...props
}: BaseAlertDialogViewportProps) => {
  return (
    <PrimitiveAlertDialog.Viewport
      data-slot="alert-dialog-viewport"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseAlertDialogViewport {
  export type Props = BaseAlertDialogViewportProps;
  export type State = BaseAlertDialogViewportState;
}

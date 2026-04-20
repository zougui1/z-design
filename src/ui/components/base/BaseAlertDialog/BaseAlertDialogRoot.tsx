"use client";
import { PrimitiveAlertDialog } from "../../primitives";

export interface BaseAlertDialogRootProps<Payload> extends PrimitiveAlertDialog
  .Root.Props<Payload> {}

export type BaseAlertDialogRootState = PrimitiveAlertDialog.Root.State;

export function BaseAlertDialogRoot<Payload>(
  props: BaseAlertDialogRootProps<Payload>,
) {
  return <PrimitiveAlertDialog.Root data-slot="alert-dialog-root" {...props} />;
}

export namespace BaseAlertDialogRoot {
  export type Props<Payload> = BaseAlertDialogRootProps<Payload>;
  export type State = BaseAlertDialogRootState;
}

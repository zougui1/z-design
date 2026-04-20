"use client";
import { PrimitiveAlertDialog } from "../../primitives";

export interface BaseAlertDialogPortalProps
  extends PrimitiveAlertDialog.Portal.Props {}

export type BaseAlertDialogPortalState = PrimitiveAlertDialog.Portal.State;

export const BaseAlertDialogPortal = (props: BaseAlertDialogPortalProps) => {
  return (
    <PrimitiveAlertDialog.Portal data-slot="alert-dialog-portal" {...props} />
  );
};

export namespace BaseAlertDialogPortal {
  export type Props = BaseAlertDialogPortalProps;
  export type State = BaseAlertDialogPortalState;
}

"use client";
import { PrimitiveDialog } from "../../primitives";

export interface BaseDialogPortalProps extends PrimitiveDialog.Portal.Props {}

export type BaseDialogPortalState = PrimitiveDialog.Portal.State;

export const BaseDialogPortal = (props: BaseDialogPortalProps) => {
  return <PrimitiveDialog.Portal data-slot="dialog-portal" {...props} />;
};

export namespace BaseDialogPortal {
  export type Props = BaseDialogPortalProps;
  export type State = BaseDialogPortalState;
}

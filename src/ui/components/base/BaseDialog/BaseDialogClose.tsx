"use client";
import { PrimitiveDialog } from "../../primitives";

export interface BaseDialogCloseProps extends PrimitiveDialog.Close.Props {}

export type BaseDialogCloseState = PrimitiveDialog.Close.State;

export const BaseDialogClose = (props: BaseDialogCloseProps) => {
  return <PrimitiveDialog.Close data-slot="dialog-close" {...props} />;
};

export namespace BaseDialogClose {
  export type Props = BaseDialogCloseProps;
  export type State = BaseDialogCloseState;
}

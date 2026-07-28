"use client";
import { PrimitiveDialog } from "../../primitives";

export interface BaseDialogRootProps extends PrimitiveDialog.Root.Props {}

export type BaseDialogRootState = PrimitiveDialog.Root.State;

export const BaseDialogRoot = (props: BaseDialogRootProps) => {
  return <PrimitiveDialog.Root data-slot="dialog-root" {...props} />;
};

export namespace BaseDialogRoot {
  export type Props = BaseDialogRootProps;
  export type State = BaseDialogRootState;
}

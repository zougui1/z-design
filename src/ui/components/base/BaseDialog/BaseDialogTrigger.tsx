"use client";
import { PrimitiveDialog } from "../../primitives";

export interface BaseDialogTriggerProps extends PrimitiveDialog.Trigger.Props {}

export type BaseDialogTriggerState = PrimitiveDialog.Trigger.State;

export const BaseDialogTrigger = (props: BaseDialogTriggerProps) => {
  return <PrimitiveDialog.Trigger data-slot="dialog-trigger" {...props} />;
};

export namespace BaseDialogTrigger {
  export type Props = BaseDialogTriggerProps;
  export type State = BaseDialogTriggerState;
}

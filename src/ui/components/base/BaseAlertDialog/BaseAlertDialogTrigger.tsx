"use client";
import { PrimitiveAlertDialog } from "../../primitives";

export interface BaseAlertDialogTriggerProps
  extends PrimitiveAlertDialog.Trigger.Props {}

export type BaseAlertDialogTriggerState = PrimitiveAlertDialog.Trigger.State;

export const BaseAlertDialogTrigger = (props: BaseAlertDialogTriggerProps) => {
  return (
    <PrimitiveAlertDialog.Trigger data-slot="alert-dialog-trigger" {...props} />
  );
};

export namespace BaseAlertDialogTrigger {
  export type Props = BaseAlertDialogTriggerProps;
  export type State = BaseAlertDialogTriggerState;
}

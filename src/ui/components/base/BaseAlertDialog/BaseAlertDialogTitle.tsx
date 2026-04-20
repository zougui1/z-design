"use client";
import { cnState } from "../../../utils";
import { PrimitiveAlertDialog } from "../../primitives";

export interface BaseAlertDialogTitleProps
  extends PrimitiveAlertDialog.Title.Props {}

export type BaseAlertDialogTitleState = PrimitiveAlertDialog.Title.State;

export const BaseAlertDialogTitle = ({
  className,
  ...props
}: BaseAlertDialogTitleProps) => {
  return (
    <PrimitiveAlertDialog.Title
      data-slot="alert-dialog-title"
      {...props}
      className={cnState(
        `cn-font-heading text-base font-medium
        sm:group-data-[size=default]/alert-dialog-popup:group-has-data-[slot=alert-dialog-media]/alert-dialog-popup:col-start-2`,
        className,
      )}
    />
  );
};

export namespace BaseAlertDialogTitle {
  export type Props = BaseAlertDialogTitleProps;
  export type State = BaseAlertDialogTitleState;
}

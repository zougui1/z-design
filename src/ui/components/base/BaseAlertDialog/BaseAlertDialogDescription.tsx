"use client";
import { cnState } from "../../../utils";
import { PrimitiveAlertDialog } from "../../primitives";

export interface BaseAlertDialogDescriptionProps
  extends PrimitiveAlertDialog.Description.Props {}

export type BaseAlertDialogDescriptionState =
  PrimitiveAlertDialog.Description.State;

export const BaseAlertDialogDescription = ({
  className,
  ...props
}: BaseAlertDialogDescriptionProps) => {
  return (
    <PrimitiveAlertDialog.Description
      data-slot="alert-dialog-description"
      {...props}
      className={cnState(
        `text-muted-foreground *:[a]:hover:text-foreground text-sm text-balance
        md:text-pretty *:[a]:underline *:[a]:underline-offset-3`,
        className,
      )}
    />
  );
};

export namespace BaseAlertDialogDescription {
  export type Props = BaseAlertDialogDescriptionProps;
  export type State = BaseAlertDialogDescriptionState;
}

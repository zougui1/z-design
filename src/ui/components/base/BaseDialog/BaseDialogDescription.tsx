"use client";
import { cnState } from "../../../utils";
import { PrimitiveDialog } from "../../primitives";

export interface BaseDialogDescriptionProps
  extends PrimitiveDialog.Description.Props {}

export type BaseDialogDescriptionState = PrimitiveDialog.Description.State;

export const BaseDialogDescription = ({
  className,
  ...props
}: BaseDialogDescriptionProps) => {
  return (
    <PrimitiveDialog.Description
      data-slot="dialog-description"
      {...props}
      className={cnState(
        `text-muted-foreground *:[a]:hover:text-foreground text-sm
        *:[a]:underline *:[a]:underline-offset-3`,
        className,
      )}
    />
  );
};

export namespace BaseDialogDescription {
  export type Props = BaseDialogDescriptionProps;
  export type State = BaseDialogDescriptionState;
}

"use client";
import { cnState } from "../../../utils";
import { PrimitiveDialog } from "../../primitives";

export interface BaseDialogTitleProps extends PrimitiveDialog.Title.Props {}

export type BaseDialogTitleState = PrimitiveDialog.Title.State;

export const BaseDialogTitle = ({
  className,
  ...props
}: BaseDialogTitleProps) => {
  return (
    <PrimitiveDialog.Title
      data-slot="dialog-title"
      {...props}
      className={cnState(
        "cn-font-heading text-base leading-none font-medium",
        className,
      )}
    />
  );
};

export namespace BaseDialogTitle {
  export type Props = BaseDialogTitleProps;
  export type State = BaseDialogTitleState;
}

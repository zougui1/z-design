"use client";
import { cnState } from "../../../utils";
import { PrimitiveDialog } from "../../primitives";

export interface BaseDialogViewportProps extends PrimitiveDialog.Viewport.Props {}

export type BaseDialogViewportState = PrimitiveDialog.Viewport.State;

export const BaseDialogViewport = ({
  className,
  ...props
}: BaseDialogViewportProps) => {
  return (
    <PrimitiveDialog.Viewport
      data-slot="dialog-viewport"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseDialogViewport {
  export type Props = BaseDialogViewportProps;
  export type State = BaseDialogViewportState;
}

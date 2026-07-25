"use client";

import { cnState } from "../../../utils";
import { PrimitiveContextMenu } from "../../primitives";

export interface BaseContextMenuBackdropProps extends PrimitiveContextMenu.Backdrop.Props {}

export type BaseContextMenuBackdropState = PrimitiveContextMenu.Backdrop.State;

export const BaseContextMenuBackdrop = ({
  className,
  ...props
}: BaseContextMenuBackdropProps) => {
  return (
    <PrimitiveContextMenu.Backdrop
      data-slot="context-menu-backdrop"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseContextMenuBackdrop {
  export type Props = BaseContextMenuBackdropProps;
  export type State = BaseContextMenuBackdropState;
}

"use client";

import { cnState } from "../../../utils";
import { PrimitiveContextMenu } from "../../primitives";

export interface BaseContextMenuPositionerProps
  extends PrimitiveContextMenu.Positioner.Props {}

export type BaseContextMenuPositionerState = PrimitiveContextMenu.Positioner.State;

export const BaseContextMenuPositioner = ({
  className,
  ...props
}: BaseContextMenuPositionerProps) => {
  return (
    <PrimitiveContextMenu.Positioner
      data-slot="context-menu-positioner"
      align="start"
      alignOffset={0}
      side="bottom"
      sideOffset={4}
      {...props}
      className={cnState("isolate z-50 outline-none", className)}
    />
  );
};

export namespace BaseContextMenuPositioner {
  export type Props = BaseContextMenuPositionerProps;
  export type State = BaseContextMenuPositionerState;
}

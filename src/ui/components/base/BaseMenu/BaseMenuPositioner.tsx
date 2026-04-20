"use client";

import { cnState } from "../../../utils";
import { PrimitiveMenu } from "../../primitives";

export interface BaseMenuPositionerProps
  extends PrimitiveMenu.Positioner.Props {}

export type BaseMenuPositionerState = PrimitiveMenu.Positioner.State;

export const BaseMenuPositioner = ({
  className,
  ...props
}: BaseMenuPositionerProps) => {
  return (
    <PrimitiveMenu.Positioner
      data-slot="menu-positioner"
      align="start"
      alignOffset={0}
      side="bottom"
      sideOffset={4}
      {...props}
      className={cnState("isolate z-50 outline-none", className)}
    />
  );
};

export namespace BaseMenuPositioner {
  export type Props = BaseMenuPositionerProps;
  export type State = BaseMenuPositionerState;
}

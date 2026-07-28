"use client";
import { cnState } from "../../../utils";
import { PrimitivePopover } from "../../primitives";

export interface BasePopoverPositionerProps
  extends PrimitivePopover.Positioner.Props {}

export type BasePopoverPositionerState = PrimitivePopover.Positioner.State;

export const BasePopoverPositioner = ({
  className,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  ...props
}: BasePopoverPositionerProps) => {
  return (
    <PrimitivePopover.Positioner
      data-slot="popover-positioner"
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
      {...props}
      className={cnState("isolate z-50 outline-none", className)}
    />
  );
};

export namespace BasePopoverPositioner {
  export type Props = BasePopoverPositionerProps;
  export type State = BasePopoverPositionerState;
}

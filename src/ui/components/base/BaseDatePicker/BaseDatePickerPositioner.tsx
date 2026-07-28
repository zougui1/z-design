"use client";

import { cnState } from "../../../utils";
import { PrimitivePopover } from "../../primitives";

export interface BaseDatePickerPositionerProps
  extends PrimitivePopover.Positioner.Props {}

export const BaseDatePickerPositioner = ({
  className,
  side = "bottom",
  sideOffset = 8,
  align = "start",
  ...props
}: BaseDatePickerPositionerProps) => {
  return (
    <PrimitivePopover.Positioner
      data-slot="date-picker-positioner"
      side={side}
      sideOffset={sideOffset}
      align={align}
      className={cnState("isolate z-50 outline-hidden", className)}
      {...props}
    />
  );
};

export namespace BaseDatePickerPositioner {
  export type Props = BaseDatePickerPositionerProps;
  export type State = PrimitivePopover.Positioner.State;
}

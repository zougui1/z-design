"use client";

import { cnState } from "../../../utils";
import { PrimitiveTooltip } from "../../primitives";

export interface BaseTooltipPositionerProps
  extends PrimitiveTooltip.Positioner.Props {}

export const BaseTooltipPositioner = ({
  className,
  side = "bottom",
  ...props
}: BaseTooltipPositionerProps) => {
  return (
    <PrimitiveTooltip.Positioner
      data-slot="tooltip-positioner"
      side={side}
      sideOffset={4}
      align="center"
      alignOffset={0}
      {...props}
      className={cnState("isolate z-50", className)}
    />
  );
};

export namespace BaseTooltipPositioner {
  export type Props = BaseTooltipPositionerProps;
  export type State = PrimitiveTooltip.Positioner.State;
}

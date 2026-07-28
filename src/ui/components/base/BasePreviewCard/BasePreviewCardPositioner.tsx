"use client";
import { cnState } from "../../../utils";
import { PrimitivePreviewCard } from "../../primitives";

export interface BasePreviewCardPositionerProps
  extends PrimitivePreviewCard.Positioner.Props {}

export type BasePreviewCardPositionerState =
  PrimitivePreviewCard.Positioner.State;

export const BasePreviewCardPositioner = ({
  className,
  side = "bottom",
  sideOffset = 8,
  align = "center",
  alignOffset = 0,
  ...props
}: BasePreviewCardPositionerProps) => {
  return (
    <PrimitivePreviewCard.Positioner
      data-slot="preview-card-positioner"
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
      {...props}
      className={cnState("isolate z-50 outline-none", className)}
    />
  );
};

export namespace BasePreviewCardPositioner {
  export type Props = BasePreviewCardPositionerProps;
  export type State = BasePreviewCardPositionerState;
}

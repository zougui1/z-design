"use client";
import { cnState } from "../../../utils";
import { PrimitivePopover } from "../../primitives";

export interface BasePopoverViewportProps
  extends PrimitivePopover.Viewport.Props {}

export type BasePopoverViewportState = PrimitivePopover.Viewport.State;

export const BasePopoverViewport = ({
  className,
  ...props
}: BasePopoverViewportProps) => {
  return (
    <PrimitivePopover.Viewport
      data-slot="popover-viewport"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BasePopoverViewport {
  export type Props = BasePopoverViewportProps;
  export type State = BasePopoverViewportState;
}

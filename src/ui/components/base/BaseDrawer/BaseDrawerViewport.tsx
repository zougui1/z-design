"use client";

import { cnState } from "../../../utils";
import { PrimitiveDrawer } from "../../primitives";

export interface BaseDrawerViewportProps
  extends PrimitiveDrawer.Viewport.Props {}

export type BaseDrawerViewportState = PrimitiveDrawer.Viewport.State;

export const BaseDrawerViewport = ({
  className,
  ...props
}: BaseDrawerViewportProps) => {
  return (
    <PrimitiveDrawer.Viewport
      data-slot="drawer-viewport"
      {...props}
      className={cnState(
        `fixed inset-0 flex items-stretch justify-end p-(--viewport-padding)
        [--viewport-padding:0px]
        supports-[-webkit-touch-callout:none]:[--viewport-padding:0.625rem]`,
        className,
      )}
    />
  );
};

export namespace BaseDrawerViewport {
  export type Props = BaseDrawerViewportProps;
  export type State = BaseDrawerViewportState;
}

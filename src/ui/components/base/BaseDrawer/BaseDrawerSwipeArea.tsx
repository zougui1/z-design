"use client";

import { cnState } from "../../../utils";
import { PrimitiveDrawer } from "../../primitives";

export interface BaseDrawerSwipeAreaProps extends PrimitiveDrawer.SwipeArea.Props {}

export type BaseDrawerSwipeAreaState = PrimitiveDrawer.SwipeArea.State;

export const BaseDrawerSwipeArea = ({
  className,
  ...props
}: BaseDrawerSwipeAreaProps) => {
  return (
    <PrimitiveDrawer.SwipeArea
      data-slot="drawer-swipe-area"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseDrawerSwipeArea {
  export type Props = BaseDrawerSwipeAreaProps;
  export type State = BaseDrawerSwipeAreaState;
}

"use client";

import { PrimitiveDrawer } from "../../primitives";

export interface BaseDrawerRootProps extends PrimitiveDrawer.Root.Props {}

export type BaseDrawerRootState = PrimitiveDrawer.Root.State;

export const BaseDrawerRoot = (props: BaseDrawerRootProps) => {
  return <PrimitiveDrawer.Root data-slot="drawer-root" {...props} />;
};

export namespace BaseDrawerRoot {
  export type Props = BaseDrawerRootProps;
  export type State = BaseDrawerRootState;
  export type Actions = PrimitiveDrawer.Root.Actions;
  export type ChangeEventDetails = PrimitiveDrawer.Root.ChangeEventDetails;
  export type ChangeEventReason = PrimitiveDrawer.Root.ChangeEventReason;
  export type SnapPoint = PrimitiveDrawer.Root.SnapPoint;
  export type SnapPointChangeEventDetails =
    PrimitiveDrawer.Root.SnapPointChangeEventDetails;
  export type SnapPointChangeEventReason =
    PrimitiveDrawer.Root.SnapPointChangeEventReason;
}

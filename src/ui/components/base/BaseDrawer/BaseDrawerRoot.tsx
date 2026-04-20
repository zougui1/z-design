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
}

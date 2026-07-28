"use client";

import { PrimitiveDrawer } from "../../primitives";

export interface BaseDrawerCloseProps extends PrimitiveDrawer.Close.Props {}

export type BaseDrawerCloseState = PrimitiveDrawer.Close.State;

export const BaseDrawerClose = (props: BaseDrawerCloseProps) => {
  return <PrimitiveDrawer.Close data-slot="drawer-close" {...props} />;
};

export namespace BaseDrawerClose {
  export type Props = BaseDrawerCloseProps;
  export type State = BaseDrawerCloseState;
}

"use client";

import { PrimitiveDrawer } from "../../primitives";

export interface BaseDrawerPortalProps extends PrimitiveDrawer.Portal.Props {}

export type BaseDrawerPortalState = PrimitiveDrawer.Portal.State;

export const BaseDrawerPortal = (props: BaseDrawerPortalProps) => {
  return <PrimitiveDrawer.Portal data-slot="drawer-portal" {...props} />;
};

export namespace BaseDrawerPortal {
  export type Props = BaseDrawerPortalProps;
  export type State = BaseDrawerPortalState;
}

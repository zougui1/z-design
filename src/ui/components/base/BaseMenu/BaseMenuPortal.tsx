"use client";

import { PrimitiveMenu } from "../../primitives";

export interface BaseMenuPortalProps extends PrimitiveMenu.Portal.Props {}

export type BaseMenuPortalState = PrimitiveMenu.Portal.State;

export const BaseMenuPortal = (props: BaseMenuPortalProps) => {
  return <PrimitiveMenu.Portal data-slot="menu-portal" {...props} />;
};

export namespace BaseMenuPortal {
  export type Props = BaseMenuPortalProps;
  export type State = BaseMenuPortalState;
}

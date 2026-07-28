"use client";

import { PrimitiveContextMenu } from "../../primitives";

export interface BaseContextMenuPortalProps extends PrimitiveContextMenu.Portal.Props {}

export type BaseContextMenuPortalState = PrimitiveContextMenu.Portal.State;

export const BaseContextMenuPortal = (props: BaseContextMenuPortalProps) => {
  return <PrimitiveContextMenu.Portal data-slot="context-menu-portal" {...props} />;
};

export namespace BaseContextMenuPortal {
  export type Props = BaseContextMenuPortalProps;
  export type State = BaseContextMenuPortalState;
}

"use client";

import { PrimitiveContextMenu } from "../../primitives";

export interface BaseContextMenuSubRootProps extends PrimitiveContextMenu.SubmenuRoot.Props {}

export type BaseContextMenuSubRootState = PrimitiveContextMenu.SubmenuRoot.State;

export const BaseContextMenuSubRoot = (props: BaseContextMenuSubRootProps) => {
  return <PrimitiveContextMenu.SubmenuRoot data-slot="context-menu-sub-root" {...props} />;
};

export namespace BaseContextMenuSubRoot {
  export type Props = BaseContextMenuSubRootProps;
  export type State = BaseContextMenuSubRootState;
}

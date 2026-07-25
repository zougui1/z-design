"use client";

import { PrimitiveContextMenu } from "../../primitives";

export interface BaseContextMenuRootProps
  extends PrimitiveContextMenu.Root.Props {}

export type BaseContextMenuRootState = PrimitiveContextMenu.Root.State;

export const BaseContextMenuRoot = (props: BaseContextMenuRootProps) => {
  return (
    <PrimitiveContextMenu.Root data-slot="context-menu-root" {...props} />
  );
};

export namespace BaseContextMenuRoot {
  export type Props = BaseContextMenuRootProps;
  export type State = BaseContextMenuRootState;
}

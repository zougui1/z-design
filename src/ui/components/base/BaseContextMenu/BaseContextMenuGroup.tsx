"use client";

import { PrimitiveContextMenu } from "../../primitives";

export interface BaseContextMenuGroupProps extends PrimitiveContextMenu.Group.Props {}

export type BaseContextMenuGroupState = PrimitiveContextMenu.Group.State;

export const BaseContextMenuGroup = (props: BaseContextMenuGroupProps) => {
  return <PrimitiveContextMenu.Group data-slot="context-menu-group" {...props} />;
};

export namespace BaseContextMenuGroup {
  export type Props = BaseContextMenuGroupProps;
  export type State = BaseContextMenuGroupState;
}

"use client";

import { PrimitiveMenu } from "../../primitives";

export interface BaseMenuGroupProps extends PrimitiveMenu.Group.Props {}

export type BaseMenuGroupState = PrimitiveMenu.Group.State;

export const BaseMenuGroup = (props: BaseMenuGroupProps) => {
  return <PrimitiveMenu.Group data-slot="menu-group" {...props} />;
};

export namespace BaseMenuGroup {
  export type Props = BaseMenuGroupProps;
  export type State = BaseMenuGroupState;
}

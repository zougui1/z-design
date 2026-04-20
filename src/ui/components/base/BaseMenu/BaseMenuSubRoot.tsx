"use client";

import { PrimitiveMenu } from "../../primitives";

export interface BaseMenuSubRootProps extends PrimitiveMenu.SubmenuRoot.Props {}

export type BaseMenuSubRootState = PrimitiveMenu.SubmenuRoot.State;

export const BaseMenuSubRoot = (props: BaseMenuSubRootProps) => {
  return <PrimitiveMenu.SubmenuRoot data-slot="menu-sub-root" {...props} />;
};

export namespace BaseMenuSubRoot {
  export type Props = BaseMenuSubRootProps;
  export type State = BaseMenuSubRootState;
}

"use client";

import { PrimitiveMenu } from "../../primitives";

export interface BaseMenuRootProps extends PrimitiveMenu.Root.Props {}

export type BaseMenuRootState = PrimitiveMenu.Root.State;

export const BaseMenuRoot = (props: BaseMenuRootProps) => {
  return <PrimitiveMenu.Root data-slot="menu-root" {...props} />;
};

export namespace BaseMenuRoot {
  export type Props = BaseMenuRootProps;
  export type State = BaseMenuRootState;
}

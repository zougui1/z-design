"use client";

import { cnState } from "../../../utils";
import { PrimitiveTabs } from "../../primitives";

export interface BaseTabsRootProps extends PrimitiveTabs.Root.Props {}

export const BaseTabsRoot = ({ className, ...props }: BaseTabsRootProps) => {
  return (
    <PrimitiveTabs.Root
      data-slot="tabs-root"
      {...props}
      className={cnState("flex flex-col gap-2", className)}
    />
  );
};

export namespace BaseTabsRoot {
  export type Props = BaseTabsRootProps;
  export type State = PrimitiveTabs.Root.State;
}

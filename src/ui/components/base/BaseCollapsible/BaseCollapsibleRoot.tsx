"use client";

import { cnState } from "../../../utils";
import { PrimitiveCollapsible } from "../../primitives";

export interface BaseCollapsibleRootProps
  extends PrimitiveCollapsible.Root.Props {}

export type BaseCollapsibleRootState = PrimitiveCollapsible.Root.State;

export const BaseCollapsibleRoot = ({
  className,
  ...props
}: BaseCollapsibleRootProps) => {
  return (
    <PrimitiveCollapsible.Root
      data-slot="collapsible-root"
      {...props}
      className={cnState("group/collapsible flex flex-col", className)}
    />
  );
};

export namespace BaseCollapsibleRoot {
  export type Props = BaseCollapsibleRootProps;
  export type State = BaseCollapsibleRootState;
}

"use client";

import { cnState } from "../../../utils";
import { PrimitiveMeter } from "../../primitives";

export interface BaseMeterRootProps extends PrimitiveMeter.Root.Props {}

export const BaseMeterRoot = ({ className, ...props }: BaseMeterRootProps) => {
  return (
    <PrimitiveMeter.Root
      data-slot="meter-root"
      {...props}
      className={cnState("box-border grid w-full grid-cols-2 gap-2", className)}
    />
  );
};

export namespace BaseMeterRoot {
  export type Props = BaseMeterRootProps;
  export type State = PrimitiveMeter.Root.State;
}

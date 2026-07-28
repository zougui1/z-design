"use client";

import { cnState } from "../../../utils";
import { PrimitiveProgress } from "../../primitives";

export interface BaseProgressRootProps extends PrimitiveProgress.Root.Props {}

export const BaseProgressRoot = ({
  className,
  ...props
}: BaseProgressRootProps) => {
  return (
    <PrimitiveProgress.Root
      data-slot="progress-root"
      {...props}
      className={cnState("box-border grid w-full grid-cols-2 gap-2", className)}
    />
  );
};

export namespace BaseProgressRoot {
  export type Props = BaseProgressRootProps;
  export type State = PrimitiveProgress.Root.State;
}

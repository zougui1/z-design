"use client";

import { cnState } from "../../../utils";
import { PrimitiveScrollArea } from "../../primitives";

export interface BaseScrollAreaRootProps
  extends PrimitiveScrollArea.Root.Props {}

export const BaseScrollAreaRoot = ({
  className,
  ...props
}: BaseScrollAreaRootProps) => {
  return (
    <PrimitiveScrollArea.Root
      data-slot="scroll-area-root"
      {...props}
      className={cnState(
        "group/scroll-area relative overflow-hidden",
        className,
      )}
    />
  );
};

export namespace BaseScrollAreaRoot {
  export type Props = BaseScrollAreaRootProps;
  export type State = PrimitiveScrollArea.Root.State;
}

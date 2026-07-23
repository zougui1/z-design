"use client";

import { cnState } from "../../../utils";
import { PrimitiveScrollArea } from "../../primitives";

export interface BaseScrollAreaCornerProps
  extends PrimitiveScrollArea.Corner.Props {}

export const BaseScrollAreaCorner = ({
  className,
  ...props
}: BaseScrollAreaCornerProps) => {
  return (
    <PrimitiveScrollArea.Corner
      data-slot="scroll-area-corner"
      {...props}
      className={cnState("bg-transparent", className)}
    />
  );
};

export namespace BaseScrollAreaCorner {
  export type Props = BaseScrollAreaCornerProps;
  export type State = PrimitiveScrollArea.Corner.State;
}

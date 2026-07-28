"use client";

import { cnState } from "../../../utils";
import { PrimitiveScrollArea } from "../../primitives";

export interface BaseScrollAreaContentProps
  extends PrimitiveScrollArea.Content.Props {}

export const BaseScrollAreaContent = ({
  className,
  ...props
}: BaseScrollAreaContentProps) => {
  return (
    <PrimitiveScrollArea.Content
      data-slot="scroll-area-content"
      {...props}
      className={cnState("min-w-max", className)}
    />
  );
};

export namespace BaseScrollAreaContent {
  export type Props = BaseScrollAreaContentProps;
  export type State = PrimitiveScrollArea.Content.State;
}

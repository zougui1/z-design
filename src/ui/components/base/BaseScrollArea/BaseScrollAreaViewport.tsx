"use client";

import { cnState } from "../../../utils";
import { PrimitiveScrollArea } from "../../primitives";

export interface BaseScrollAreaViewportProps
  extends PrimitiveScrollArea.Viewport.Props {}

export const BaseScrollAreaViewport = ({
  className,
  ...props
}: BaseScrollAreaViewportProps) => {
  return (
    <PrimitiveScrollArea.Viewport
      data-slot="scroll-area-viewport"
      {...props}
      className={cnState(
        `focus-visible:ring-ring size-full overscroll-contain rounded-[inherit]
        outline-none focus-visible:ring-2`,
        className,
      )}
    />
  );
};

export namespace BaseScrollAreaViewport {
  export type Props = BaseScrollAreaViewportProps;
  export type State = PrimitiveScrollArea.Viewport.State;
}

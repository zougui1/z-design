"use client";

import { cnState } from "../../../utils";
import { PrimitiveScrollArea } from "../../primitives";

export interface BaseScrollAreaThumbProps
  extends PrimitiveScrollArea.Thumb.Props {}

export const BaseScrollAreaThumb = ({
  className,
  ...props
}: BaseScrollAreaThumbProps) => {
  return (
    <PrimitiveScrollArea.Thumb
      data-slot="scroll-area-thumb"
      {...props}
      className={cnState(
        "bg-foreground/25 hover:bg-foreground/40 relative flex-1 rounded-full transition-colors",
        className,
      )}
    />
  );
};

export namespace BaseScrollAreaThumb {
  export type Props = BaseScrollAreaThumbProps;
  export type State = PrimitiveScrollArea.Thumb.State;
}

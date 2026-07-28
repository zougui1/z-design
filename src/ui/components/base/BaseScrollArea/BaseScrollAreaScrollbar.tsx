"use client";

import { cnState } from "../../../utils";
import { PrimitiveScrollArea } from "../../primitives";

export interface BaseScrollAreaScrollbarProps
  extends PrimitiveScrollArea.Scrollbar.Props {}

export const BaseScrollAreaScrollbar = ({
  className,
  orientation = "vertical",
  ...props
}: BaseScrollAreaScrollbarProps) => {
  return (
    <PrimitiveScrollArea.Scrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      {...props}
      className={cnState(
        `z-20 flex touch-none p-0.5 opacity-0 transition-opacity delay-300
        select-none data-hovering:opacity-100 data-hovering:delay-0
        data-scrolling:opacity-100 data-scrolling:delay-0
        data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:flex-col
        data-[orientation=vertical]:w-2.5`,
        className,
      )}
    />
  );
};

export namespace BaseScrollAreaScrollbar {
  export type Props = BaseScrollAreaScrollbarProps;
  export type State = PrimitiveScrollArea.Scrollbar.State;
}

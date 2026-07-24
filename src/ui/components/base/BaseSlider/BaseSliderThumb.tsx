"use client";

import { cnState } from "../../../utils";
import { PrimitiveSlider } from "../../primitives";

export interface BaseSliderThumbProps extends PrimitiveSlider.Thumb.Props {}

export type BaseSliderThumbState = PrimitiveSlider.Thumb.State;

export const BaseSliderThumb = ({
  className,
  ...props
}: BaseSliderThumbProps) => {
  return (
    <PrimitiveSlider.Thumb
      data-slot="slider-thumb"
      {...props}
      className={cnState(
        `bg-primary-foreground border-primary focus-visible:ring-ring/50 block
        size-4 shrink-0 rounded-full border-2 shadow-sm transition-shadow
        outline-none hover:ring-4 hover:ring-primary/20 focus-visible:ring-3
        data-dragging:ring-3 disabled:pointer-events-none`,
        className,
      )}
    />
  );
};

export namespace BaseSliderThumb {
  export type Props = BaseSliderThumbProps;
  export type State = BaseSliderThumbState;
}

"use client";

import { cnState } from "../../../utils";
import { PrimitiveSlider } from "../../primitives";

export interface BaseSliderControlProps
  extends PrimitiveSlider.Control.Props {}

export type BaseSliderControlState = PrimitiveSlider.Control.State;

export const BaseSliderControl = ({
  className,
  ...props
}: BaseSliderControlProps) => {
  return (
    <PrimitiveSlider.Control
      data-slot="slider-control"
      {...props}
      className={cnState(
        `relative flex w-full touch-none items-center py-1.5 select-none
        data-[orientation=vertical]:h-full data-[orientation=vertical]:w-auto
        data-[orientation=vertical]:flex-col data-[orientation=vertical]:px-1.5
        data-[orientation=vertical]:py-0`,
        className,
      )}
    />
  );
};

export namespace BaseSliderControl {
  export type Props = BaseSliderControlProps;
  export type State = BaseSliderControlState;
}

"use client";

import { cnState } from "../../../utils";
import { PrimitiveSlider } from "../../primitives";

export interface BaseSliderIndicatorProps
  extends PrimitiveSlider.Indicator.Props {}

export type BaseSliderIndicatorState = PrimitiveSlider.Indicator.State;

export const BaseSliderIndicator = ({
  className,
  ...props
}: BaseSliderIndicatorProps) => {
  return (
    <PrimitiveSlider.Indicator
      data-slot="slider-indicator"
      {...props}
      className={cnState("bg-primary rounded-full", className)}
    />
  );
};

export namespace BaseSliderIndicator {
  export type Props = BaseSliderIndicatorProps;
  export type State = BaseSliderIndicatorState;
}

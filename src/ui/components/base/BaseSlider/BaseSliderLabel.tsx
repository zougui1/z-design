"use client";

import { cnState } from "../../../utils";
import { PrimitiveSlider } from "../../primitives";

export interface BaseSliderLabelProps extends PrimitiveSlider.Label.Props {}

export type BaseSliderLabelState = PrimitiveSlider.Label.State;

export const BaseSliderLabel = ({
  className,
  ...props
}: BaseSliderLabelProps) => {
  return (
    <PrimitiveSlider.Label
      data-slot="slider-label"
      {...props}
      className={cnState("text-sm font-medium", className)}
    />
  );
};

export namespace BaseSliderLabel {
  export type Props = BaseSliderLabelProps;
  export type State = BaseSliderLabelState;
}

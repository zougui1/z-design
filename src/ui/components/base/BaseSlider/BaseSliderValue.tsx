"use client";

import { cnState } from "../../../utils";
import { PrimitiveSlider } from "../../primitives";

export interface BaseSliderValueProps extends PrimitiveSlider.Value.Props {}

export type BaseSliderValueState = PrimitiveSlider.Value.State;

export const BaseSliderValue = ({
  className,
  ...props
}: BaseSliderValueProps) => {
  return (
    <PrimitiveSlider.Value
      data-slot="slider-value"
      {...props}
      className={cnState(
        "text-muted-foreground text-sm tabular-nums",
        className,
      )}
    />
  );
};

export namespace BaseSliderValue {
  export type Props = BaseSliderValueProps;
  export type State = BaseSliderValueState;
}

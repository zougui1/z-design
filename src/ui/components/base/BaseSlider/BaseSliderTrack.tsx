"use client";

import { cnState } from "../../../utils";
import { PrimitiveSlider } from "../../primitives";

export interface BaseSliderTrackProps extends PrimitiveSlider.Track.Props {}

export type BaseSliderTrackState = PrimitiveSlider.Track.State;

export const BaseSliderTrack = ({
  className,
  ...props
}: BaseSliderTrackProps) => {
  return (
    <PrimitiveSlider.Track
      data-slot="slider-track"
      {...props}
      className={cnState(
        `bg-muted relative h-1.5 w-full grow rounded-full
        data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5`,
        className,
      )}
    />
  );
};

export namespace BaseSliderTrack {
  export type Props = BaseSliderTrackProps;
  export type State = BaseSliderTrackState;
}

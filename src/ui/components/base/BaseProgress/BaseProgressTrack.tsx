"use client";

import { cnState } from "../../../utils";
import { PrimitiveProgress } from "../../primitives";

export interface BaseProgressTrackProps extends PrimitiveProgress.Track.Props {}

export const BaseProgressTrack = ({
  className,
  ...props
}: BaseProgressTrackProps) => {
  return (
    <PrimitiveProgress.Track
      data-slot="progress-track"
      {...props}
      className={cnState(
        `bg-primary/20 col-span-2 block h-2 w-full overflow-hidden rounded-full
        shadow-[inset_0_0_0_1px] shadow-black/5`,
        className,
      )}
    />
  );
};

export namespace BaseProgressTrack {
  export type Props = BaseProgressTrackProps;
  export type State = PrimitiveProgress.Track.State;
}

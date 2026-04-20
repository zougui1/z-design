"use client";

import { cnState } from "../../../utils";
import { PrimitiveMeter } from "../../primitives";

export interface BaseMeterTrackProps extends PrimitiveMeter.Track.Props {}

export const BaseMeterTrack = ({
  className,
  ...props
}: BaseMeterTrackProps) => {
  return (
    <PrimitiveMeter.Track
      data-slot="meter-track"
      {...props}
      className={cnState(
        `bg-primary/20 col-span-2 block h-2 w-full overflow-hidden rounded-sm
        shadow-[inset_0_0_0_1px] shadow-black/5`,
        className,
      )}
    />
  );
};

export namespace BaseMeterTrack {
  export type Props = BaseMeterTrackProps;
  export type State = PrimitiveMeter.Track.State;
}

"use client";

import { cnState } from "../../../utils";
import { PrimitiveSlider } from "../../primitives";

export interface BaseSliderRootProps extends PrimitiveSlider.Root.Props {}

export type BaseSliderRootState = PrimitiveSlider.Root.State;

export const BaseSliderRoot = ({
  className,
  ...props
}: BaseSliderRootProps) => {
  return (
    <PrimitiveSlider.Root
      data-slot="slider-root"
      {...props}
      className={cnState(
        `relative flex flex-col gap-2 data-disabled:opacity-50
        data-[orientation=vertical]:h-full data-[orientation=vertical]:w-auto`,
        className,
      )}
    />
  );
};

export namespace BaseSliderRoot {
  export type Props = BaseSliderRootProps;
  export type State = BaseSliderRootState;
}

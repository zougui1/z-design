"use client";

import { cnState } from "../../../utils";
import { PrimitiveRadio } from "../../primitives";

export interface BaseRadioIndicatorProps
  extends PrimitiveRadio.Indicator.Props {}

export type BaseRadioIndicatorState = PrimitiveRadio.Indicator.State;

export const BaseRadioIndicator = ({
  className,
  ...props
}: BaseRadioIndicatorProps) => {
  return (
    <PrimitiveRadio.Indicator
      data-slot="radio-indicator"
      {...props}
      className={cnState(
        `data-checked:bg-primary size-2 rounded-full transition-transform
        data-unchecked:scale-0`,
        className,
      )}
    />
  );
};

export namespace BaseRadioIndicator {
  export type Props = BaseRadioIndicatorProps;
  export type State = BaseRadioIndicatorState;
}

"use client";

import { cnState } from "../../../utils";
import { PrimitiveCheckbox } from "../../primitives";

export interface BaseCheckboxIndicatorProps
  extends PrimitiveCheckbox.Indicator.Props {}

export type BaseCheckboxIndicatorState = PrimitiveCheckbox.Indicator.State;

export const BaseCheckboxIndicator = ({
  className,
  ...props
}: BaseCheckboxIndicatorProps) => {
  return (
    <PrimitiveCheckbox.Indicator
      data-slot="checkbox-indicator"
      {...props}
      className={cnState(
        `grid place-content-center text-current transition-none
        [&>svg]:size-3.5`,
        className,
      )}
    />
  );
};

export namespace BaseCheckboxIndicator {
  export type Props = BaseCheckboxIndicatorProps;
  export type State = BaseCheckboxIndicatorState;
}

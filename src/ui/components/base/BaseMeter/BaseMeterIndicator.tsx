"use client";

import { cnState } from "../../../utils";
import { PrimitiveMeter } from "../../primitives";

export interface BaseMeterIndicatorProps
  extends PrimitiveMeter.Indicator.Props {}

export const BaseMeterIndicator = ({
  className,
  ...props
}: BaseMeterIndicatorProps) => {
  return (
    <PrimitiveMeter.Indicator
      data-slot="meter-indicator"
      {...props}
      className={cnState(
        "bg-primary block transition-all duration-500",
        className,
      )}
    />
  );
};

export namespace BaseMeterIndicator {
  export type Props = BaseMeterIndicatorProps;
  export type State = PrimitiveMeter.Indicator.State;
}

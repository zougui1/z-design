"use client";

import { cnState } from "../../../utils";
import { PrimitiveProgress } from "../../primitives";

export interface BaseProgressIndicatorProps
  extends PrimitiveProgress.Indicator.Props {}

export const BaseProgressIndicator = ({
  className,
  ...props
}: BaseProgressIndicatorProps) => {
  return (
    <PrimitiveProgress.Indicator
      data-slot="progress-indicator"
      {...props}
      className={cnState(
        "bg-primary block rounded-full transition-all duration-500",
        className,
      )}
    />
  );
};

export namespace BaseProgressIndicator {
  export type Props = BaseProgressIndicatorProps;
  export type State = PrimitiveProgress.Indicator.State;
}

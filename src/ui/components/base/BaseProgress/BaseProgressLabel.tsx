"use client";

import { cnState } from "../../../utils";
import { PrimitiveProgress } from "../../primitives";

export interface BaseProgressLabelProps extends PrimitiveProgress.Label.Props {}

export const BaseProgressLabel = ({
  className,
  ...props
}: BaseProgressLabelProps) => {
  return (
    <PrimitiveProgress.Label
      data-slot="progress-label"
      {...props}
      className={cnState("text-sm font-medium", className)}
    />
  );
};

export namespace BaseProgressLabel {
  export type Props = BaseProgressLabelProps;
  export type State = PrimitiveProgress.Label.State;
}

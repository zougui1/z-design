"use client";

import { cnState } from "../../../utils";
import { PrimitiveProgress } from "../../primitives";

export interface BaseProgressValueProps extends PrimitiveProgress.Value.Props {}

export const BaseProgressValue = ({
  className,
  ...props
}: BaseProgressValueProps) => {
  return (
    <PrimitiveProgress.Value
      data-slot="progress-value"
      {...props}
      className={cnState(
        "text-muted-foreground col-start-2 m-0 text-right text-sm",
        className,
      )}
    />
  );
};

export namespace BaseProgressValue {
  export type Props = BaseProgressValueProps;
  export type State = PrimitiveProgress.Value.State;
}

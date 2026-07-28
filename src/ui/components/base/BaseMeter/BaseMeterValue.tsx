"use client";

import { cnState } from "../../../utils";
import { PrimitiveMeter } from "../../primitives";

export interface BaseMeterValueProps extends PrimitiveMeter.Value.Props {}

export const BaseMeterValue = ({
  className,
  ...props
}: BaseMeterValueProps) => {
  return (
    <PrimitiveMeter.Value
      data-slot="meter-value"
      {...props}
      className={cnState("col-start-2 m-0 text-right text-sm", className)}
    />
  );
};

export namespace BaseMeterValue {
  export type Props = BaseMeterValueProps;
  export type State = PrimitiveMeter.Value.State;
}

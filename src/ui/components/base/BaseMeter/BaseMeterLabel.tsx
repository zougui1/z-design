"use client";

import { cnState } from "../../../utils";
import { PrimitiveMeter } from "../../primitives";

export interface BaseMeterLabelProps extends PrimitiveMeter.Label.Props {}

export const BaseMeterLabel = ({
  className,
  ...props
}: BaseMeterLabelProps) => {
  return (
    <PrimitiveMeter.Label
      data-slot="meter-label"
      {...props}
      className={cnState("text-sm", className)}
    />
  );
};

export namespace BaseMeterLabel {
  export type Props = BaseMeterLabelProps;
  export type State = PrimitiveMeter.Label.State;
}

"use client";

import { cnState } from "../../../utils";
import { PrimitiveFieldset } from "../../primitives";

export interface BaseFieldsetLegendProps
  extends PrimitiveFieldset.Legend.Props {
  variant?: "legend" | "label";
}

export type BaseFieldsetLegendState = PrimitiveFieldset.Legend.State;

export const BaseFieldsetLegend = ({
  className,
  variant = "legend",
  ...props
}: BaseFieldsetLegendProps) => {
  return (
    <PrimitiveFieldset.Legend
      data-slot="fieldset-legend"
      data-variant={variant}
      {...props}
      className={cnState(
        `mb-1.5 font-medium data-[variant=label]:text-sm
        data-[variant=legend]:text-base`,
        className,
      )}
    />
  );
};

export namespace BaseFieldsetLegend {
  export type Props = BaseFieldsetLegendProps;
  export type State = BaseFieldsetLegendState;
}

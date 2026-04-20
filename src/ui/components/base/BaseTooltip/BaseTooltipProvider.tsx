"use client";

import { PrimitiveTooltip } from "../../primitives";

export interface BaseTooltipProviderProps
  extends PrimitiveTooltip.Provider.Props {}

export const BaseTooltipProvider = (props: BaseTooltipProviderProps) => {
  return (
    <PrimitiveTooltip.Provider
      data-slot="tooltip-provider"
      delay={0}
      {...props}
    />
  );
};

export namespace BaseTooltipProvider {
  export type Props = BaseTooltipProviderProps;
  export type State = PrimitiveTooltip.Provider.State;
}

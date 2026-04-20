"use client";

import { PrimitiveTooltip } from "../../primitives";

export interface BaseTooltipRootProps extends PrimitiveTooltip.Root.Props {}

export const BaseTooltipRoot = (props: BaseTooltipRootProps) => {
  return <PrimitiveTooltip.Root data-slot="tooltip-root" {...props} />;
};

export namespace BaseTooltipRoot {
  export type Props = BaseTooltipRootProps;
  export type State = PrimitiveTooltip.Root.State;
}

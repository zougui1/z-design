"use client";

import { PrimitiveTooltip } from "../../primitives";

export interface BaseTooltipTriggerProps
  extends PrimitiveTooltip.Trigger.Props {}

export const BaseTooltipTrigger = (props: BaseTooltipTriggerProps) => {
  return <PrimitiveTooltip.Trigger data-slot="tooltip-trigger" {...props} />;
};

export namespace BaseTooltipTrigger {
  export type Props = BaseTooltipTriggerProps;
  export type State = PrimitiveTooltip.Trigger.State;
}

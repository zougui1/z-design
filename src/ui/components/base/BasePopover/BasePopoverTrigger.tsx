"use client";
import { PrimitivePopover } from "../../primitives";

export interface BasePopoverTriggerProps
  extends PrimitivePopover.Trigger.Props {}

export type BasePopoverTriggerState = PrimitivePopover.Trigger.State;

export const BasePopoverTrigger = (props: BasePopoverTriggerProps) => {
  return <PrimitivePopover.Trigger data-slot="popover-trigger" {...props} />;
};

export namespace BasePopoverTrigger {
  export type Props = BasePopoverTriggerProps;
  export type State = BasePopoverTriggerState;
}

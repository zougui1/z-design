"use client";

import { PrimitiveDrawer } from "../../primitives";

export interface BaseDrawerTriggerProps extends PrimitiveDrawer.Trigger.Props {}

export type BaseDrawerTriggerState = PrimitiveDrawer.Trigger.State;

export const BaseDrawerTrigger = (props: BaseDrawerTriggerProps) => {
  return <PrimitiveDrawer.Trigger data-slot="drawer-trigger" {...props} />;
};

export namespace BaseDrawerTrigger {
  export type Props = BaseDrawerTriggerProps;
  export type State = BaseDrawerTriggerState;
}

"use client";

import { PrimitiveMenu } from "../../primitives";

export interface BaseMenuTriggerProps extends PrimitiveMenu.Trigger.Props {}

export type BaseMenuTriggerState = PrimitiveMenu.Trigger.State;

export const BaseMenuTrigger = (props: BaseMenuTriggerProps) => {
  return <PrimitiveMenu.Trigger data-slot="menu-trigger" {...props} />;
};

export namespace BaseMenuTrigger {
  export type Props = BaseMenuTriggerProps;
  export type State = BaseMenuTriggerState;
}

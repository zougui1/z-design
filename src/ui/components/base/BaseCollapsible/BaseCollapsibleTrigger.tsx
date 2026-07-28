"use client";

import { cnState } from "../../../utils";
import { PrimitiveCollapsible } from "../../primitives";

export interface BaseCollapsibleTriggerProps
  extends PrimitiveCollapsible.Trigger.Props {}

export type BaseCollapsibleTriggerState = PrimitiveCollapsible.Trigger.State;

export const BaseCollapsibleTrigger = ({
  className,
  ...props
}: BaseCollapsibleTriggerProps) => {
  return (
    <PrimitiveCollapsible.Trigger
      data-slot="collapsible-trigger"
      {...props}
      className={cnState(
        "flex cursor-pointer items-center gap-2 px-2 py-1 text-sm font-normal",
        className,
      )}
    />
  );
};

export namespace BaseCollapsibleTrigger {
  export type Props = BaseCollapsibleTriggerProps;
  export type State = BaseCollapsibleTriggerState;
}

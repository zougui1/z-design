"use client";

import { cnState } from "../../../utils";
import { PrimitiveMenu } from "../../primitives";

export interface BaseMenubarTriggerProps extends PrimitiveMenu.Trigger.Props {}

export type BaseMenubarTriggerState = PrimitiveMenu.Trigger.State;

export const BaseMenubarTrigger = ({
  className,
  ...props
}: BaseMenubarTriggerProps) => {
  return (
    <PrimitiveMenu.Trigger
      data-slot="menubar-trigger"
      {...props}
      className={cnState(
        `focus-visible:ring-ring/50 flex cursor-pointer items-center gap-1
        rounded-sm px-2.5 py-1 text-sm font-medium transition-colors
        outline-none select-none hover:bg-accent hover:text-accent-foreground
        focus-visible:ring-2 data-disabled:pointer-events-none
        data-disabled:opacity-50 data-popup-open:bg-accent
        data-popup-open:text-accent-foreground`,
        className,
      )}
    />
  );
};

export namespace BaseMenubarTrigger {
  export type Props = BaseMenubarTriggerProps;
  export type State = BaseMenubarTriggerState;
}

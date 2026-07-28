"use client";
import { cnState } from "../../../utils";
import { PrimitiveAccordion } from "../../primitives";

export interface BaseAccordionTriggerProps
  extends PrimitiveAccordion.Trigger.Props {}

export type BaseAccordionTriggerState = PrimitiveAccordion.Trigger.State;

export const BaseAccordionTrigger = ({
  className,
  ...props
}: BaseAccordionTriggerProps) => {
  return (
    <PrimitiveAccordion.Trigger
      data-slot="accordion-trigger"
      {...props}
      className={cnState(
        `group/accordion-trigger focus-visible:border-ring
        focus-visible:ring-ring/50 focus-visible:after:border-ring flex w-full
        flex-1 justify-between rounded-lg border border-transparent py-2.5
        text-sm font-medium transition-all outline-none focus-visible:ring-3
        disabled:pointer-events-none disabled:opacity-50`,
        className,
      )}
    />
  );
};

export namespace BaseAccordionTrigger {
  export type Props = BaseAccordionTriggerProps;
  export type State = BaseAccordionTriggerState;
}

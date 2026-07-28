"use client";
import { cnState } from "../../../utils";
import { PrimitiveAccordion } from "../../primitives";

export interface BaseAccordionPanelProps
  extends PrimitiveAccordion.Panel.Props {}

export type BaseAccordionPanelState = PrimitiveAccordion.Panel.State;

export const BaseAccordionPanel = ({
  className,
  ...props
}: BaseAccordionPanelProps) => {
  return (
    <PrimitiveAccordion.Panel
      data-slot="accordion-panel"
      {...props}
      className={cnState(
        `h-(--accordion-panel-height) overflow-hidden pb-2.5 text-base
        text-gray-600 transition-[height] ease-out data-ending-style:h-0
        data-starting-style:h-0`,
        className,
      )}
    />
  );
};

export namespace BaseAccordionPanel {
  export type Props = BaseAccordionPanelProps;
  export type State = BaseAccordionPanelState;
}

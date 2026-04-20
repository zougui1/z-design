"use client";
import { cnState } from "../../../utils";
import { PrimitiveAccordion } from "../../primitives";

export interface BaseAccordionHeaderProps extends PrimitiveAccordion.Header.Props {}

export type BaseAccordionHeaderState = PrimitiveAccordion.Header.State;

export const BaseAccordionHeader = ({
  className,
  ...props
}: BaseAccordionHeaderProps) => {
  return (
    <PrimitiveAccordion.Header
      data-slot="accordion-header"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseAccordionHeader {
  export type Props = BaseAccordionHeaderProps;
  export type State = BaseAccordionHeaderState;
}

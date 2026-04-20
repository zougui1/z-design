"use client";
import { cnState } from "../../../utils";
import { PrimitiveAccordion } from "../../primitives";

export interface BaseAccordionItemProps extends PrimitiveAccordion.Item.Props {}

export type BaseAccordionItemState = PrimitiveAccordion.Item.State;

export const BaseAccordionItem = ({
  className,
  ...props
}: BaseAccordionItemProps) => {
  return (
    <PrimitiveAccordion.Item
      data-slot="accordion-item"
      {...props}
      className={cnState("not-last:border-b", className)}
    />
  );
};

export namespace BaseAccordionItem {
  export type Props = BaseAccordionItemProps;
  export type State = BaseAccordionItemState;
}

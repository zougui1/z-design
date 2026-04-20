"use client";
import { cnState } from "../../../utils";
import { PrimitiveAccordion } from "../../primitives";

export interface BaseAccordionRootProps extends PrimitiveAccordion.Root.Props {}

export type BaseAccordionRootState = PrimitiveAccordion.Root.State;

export const BaseAccordionRoot = ({
  className,
  ...props
}: BaseAccordionRootProps) => {
  return (
    <PrimitiveAccordion.Root
      data-slot="accordion-root"
      {...props}
      className={cnState("flex w-full flex-col", className)}
    />
  );
};

export namespace BaseAccordionRoot {
  export type Props = BaseAccordionRootProps;
  export type State = BaseAccordionRootState;
}

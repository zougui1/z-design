"use client";
import { ChevronDown } from "lucide-react";

import { cn } from "../../../utils";

export interface BaseAccordionTriggerIconProps extends React.ComponentProps<
  typeof ChevronDown
> {}

export const BaseAccordionTriggerIcon = ({
  className,
  ...props
}: BaseAccordionTriggerIconProps) => {
  return (
    <ChevronDown
      data-slot="accordion-trigger-icon"
      {...props}
      className={cn(
        `pointer-events-none ml-auto shrink-0 transition-transform
        group-aria-expanded/accordion-trigger:rotate-180`,
        className,
      )}
    />
  );
};

export namespace BaseAccordionTriggerIcon {
  export type Props = BaseAccordionTriggerIconProps;
}

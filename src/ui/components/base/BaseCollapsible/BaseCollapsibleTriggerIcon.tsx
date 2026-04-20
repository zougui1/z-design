"use client";

import { mergeProps, useRender } from "@base-ui/react";
import { ChevronDown } from "lucide-react";

import { cn } from "../../../utils";

export interface BaseCollapsibleTriggerIconProps extends useRender.ComponentProps<"svg"> {}

export const BaseCollapsibleTriggerIcon = ({
  className,
  render,
  ...props
}: BaseCollapsibleTriggerIconProps) => {
  return useRender({
    defaultTagName: "svg",
    render: render ?? (
      <ChevronDown className="group-data-closed/collapsible:-rotate-90" />
    ),
    props: mergeProps<"svg">(
      {
        ...{ "data-slot": "collapsible-trigger-icon" },
        className: cn("size-4 transition-all ease-out", className),
      },
      props,
    ),
  });
};

export namespace BaseCollapsibleTriggerIcon {
  export type Props = BaseCollapsibleTriggerIconProps;
}

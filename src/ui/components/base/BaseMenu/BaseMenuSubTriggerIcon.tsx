"use client";

import { mergeProps, useRender } from "@base-ui/react";
import { ChevronRight } from "lucide-react";

import { cn } from "../../../utils";

export interface BaseMenuSubTriggerIconProps extends useRender.ComponentProps<"svg"> {}

export const BaseMenuSubTriggerIcon = ({
  className,
  render,
  ...props
}: BaseMenuSubTriggerIconProps) => {
  return useRender({
    defaultTagName: "svg",
    render: render ?? <ChevronRight />,
    props: mergeProps<"svg">(
      {
        ...{ "data-slot": "menu-sub-trigger-icon" },
        className: cn("cn-rtl-flip ml-auto", className),
      },
      props,
    ),
  });
};

export namespace BaseMenuSubTriggerIcon {
  export type Props = BaseMenuSubTriggerIconProps;
}

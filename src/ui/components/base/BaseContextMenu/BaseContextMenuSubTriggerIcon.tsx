"use client";

import { mergeProps, useRender } from "@base-ui/react";
import { ChevronRight } from "lucide-react";

import { cn } from "../../../utils";

export interface BaseContextMenuSubTriggerIconProps extends useRender.ComponentProps<"svg"> {}

export const BaseContextMenuSubTriggerIcon = ({
  className,
  render,
  ...props
}: BaseContextMenuSubTriggerIconProps) => {
  return useRender({
    defaultTagName: "svg",
    render: render ?? <ChevronRight />,
    props: mergeProps<"svg">(
      {
        ...{ "data-slot": "context-menu-sub-trigger-icon" },
        className: cn("cn-rtl-flip ml-auto", className),
      },
      props,
    ),
  });
};

export namespace BaseContextMenuSubTriggerIcon {
  export type Props = BaseContextMenuSubTriggerIconProps;
}

"use client";

import { mergeProps, useRender } from "@base-ui/react";
import { ChevronDown } from "lucide-react";

import { cn } from "../../../utils";

export interface BaseComboboxTriggerIconProps extends useRender.ComponentProps<"svg"> {}

export const BaseComboboxTriggerIcon = ({
  className,
  render,
  ...props
}: BaseComboboxTriggerIconProps) => {
  return useRender({
    defaultTagName: "svg",
    render: render ?? <ChevronDown />,
    props: mergeProps<"svg">(
      {
        ...{ "data-slot": "combobox-trigger-icon" },
        className: cn(
          "size-4 pointer-events-none text-muted-foreground",
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseComboboxTriggerIcon {
  export type Props = BaseComboboxTriggerIconProps;
}

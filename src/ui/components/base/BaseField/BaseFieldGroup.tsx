"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseFieldGroupProps extends useRender.ComponentProps<"div"> {}

export const BaseFieldGroup = ({
  className,
  render,
  ...props
}: BaseFieldGroupProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "field-group" },
        className: cn(
          `group/field-group @container/field-group flex w-full flex-col gap-5
          data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4`,
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseFieldGroup {
  export type Props = BaseFieldGroupProps;
}

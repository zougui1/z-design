"use client";
import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseAvatarGroupProps extends useRender.ComponentProps<"div"> {}

export const BaseAvatarGroup = ({
  className,
  render,
  ...props
}: BaseAvatarGroupProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "avatar-group" },
        className: cn(
          "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseAvatarGroup {
  export type Props = BaseAvatarGroupProps;
}

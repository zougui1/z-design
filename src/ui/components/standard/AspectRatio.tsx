"use client";

import { cn } from "~/ui/utils";

import { BaseAspectRatio } from "../base";

export interface AspectRatioProps extends BaseAspectRatio.Props {}

export const AspectRatio = ({ className, ...props }: AspectRatioProps) => {
  return (
    <BaseAspectRatio
      className={cn(
        `overflow-hidden rounded-lg
        [&>img]:size-full [&>img]:object-cover
        [&>video]:size-full [&>video]:object-cover`,
        className,
      )}
      {...props}
    />
  );
};

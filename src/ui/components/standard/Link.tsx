"use client";

import { BaseLink } from "../base";
import { cn } from "~/ui/utils";

export interface LinkProps extends BaseLink.Props {}

export const Link = ({ className, ...props }: LinkProps) => {
  return (
    <BaseLink
      data-slot="link"
      className={cn(
        `text-primary hover:text-primary-light rounded-xs underline
        underline-offset-4 transition-colors outline-none
        focus-visible:ring-2 focus-visible:ring-ring`,
        className,
      )}
      {...props}
    />
  );
};

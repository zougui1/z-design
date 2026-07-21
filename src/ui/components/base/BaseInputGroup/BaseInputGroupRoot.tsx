"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseInputGroupRootProps extends useRender.ComponentProps<"div"> {}

export const BaseInputGroupRoot = ({
  className,
  render,
  ...props
}: BaseInputGroupRootProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        ...{ "data-slot": "input-group-root" },
        className: cn(
          `group/input-group relative flex h-9 w-full min-w-0 items-center rounded-sm
          border border-border transition-colors outline-none
          in-data-[slot=combobox-popup]:focus-within:border-inherit
          in-data-[slot=combobox-popup]:focus-within:ring-0
          has-disabled:bg-background-light/50 has-disabled:opacity-50
          has-[[data-slot=input-group-control]:focus-visible]:border-primary
          has-[[data-slot=input-group-control]:focus-visible]:ring-primary/50
          has-[[data-slot=input-group-control]:focus-visible]:ring-3
          has-[[data-slot][aria-invalid=true]]:border-destructive
          has-[[data-slot][aria-invalid=true]]:ring-destructive/20
          has-[[data-slot=input-group-control][aria-invalid=true]:focus-visible]:ring-destructive/50
          has-[[data-slot][aria-invalid=true]]:ring-3
          has-[>[data-align=block-end]]:h-auto
          has-[>[data-align=block-end]]:flex-col
          has-[>[data-align=block-start]]:h-auto
          has-[>[data-align=block-start]]:flex-col
          has-[>textarea]:h-auto bg-background-light
          has-[>[data-align=block-end]]:[&>input]:pt-3
          has-[>[data-align=block-start]]:[&>input]:pb-3
          has-[>[data-align=inline-end]]:[&>input]:pr-1.5
          has-[>[data-align=inline-start]]:[&>input]:pl-1.5 shadow-sm`,
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseInputGroupRoot {
  export type Props = BaseInputGroupRootProps;
}

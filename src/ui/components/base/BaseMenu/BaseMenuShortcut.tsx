"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseMenuShortcutProps extends useRender.ComponentProps<"span"> {}

export const BaseMenuShortcut = ({
  className,
  render,
  ...props
}: BaseMenuShortcutProps) => {
  return useRender({
    defaultTagName: "span",
    render,
    props: mergeProps<"span">(
      {
        ...{ "data-slot": "menu-shortcut" },
        className: cn(
          "ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseMenuShortcut {
  export type Props = BaseMenuShortcutProps;
}

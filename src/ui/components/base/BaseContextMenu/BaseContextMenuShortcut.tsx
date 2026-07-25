"use client";

import { mergeProps, useRender } from "@base-ui/react";

import { cn } from "../../../utils";

export interface BaseContextMenuShortcutProps extends useRender.ComponentProps<"span"> {}

export const BaseContextMenuShortcut = ({
  className,
  render,
  ...props
}: BaseContextMenuShortcutProps) => {
  return useRender({
    defaultTagName: "span",
    render,
    props: mergeProps<"span">(
      {
        ...{ "data-slot": "context-menu-shortcut" },
        className: cn(
          "ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
          className,
        ),
      },
      props,
    ),
  });
};

export namespace BaseContextMenuShortcut {
  export type Props = BaseContextMenuShortcutProps;
}

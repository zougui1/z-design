"use client";

import { cnState } from "../../../utils";
import { PrimitiveContextMenu } from "../../primitives";

export interface BaseContextMenuSeparatorProps extends PrimitiveContextMenu.Separator.Props {}

export type BaseContextMenuSeparatorState = PrimitiveContextMenu.Separator.State;

export const BaseContextMenuSeparator = ({
  className,
  ...props
}: BaseContextMenuSeparatorProps) => {
  return (
    <PrimitiveContextMenu.Separator
      data-slot="context-menu-separator"
      {...props}
      className={cnState("bg-border -mx-1 my-1 h-px", className)}
    />
  );
};

export namespace BaseContextMenuSeparator {
  export type Props = BaseContextMenuSeparatorProps;
  export type State = BaseContextMenuSeparatorState;
}

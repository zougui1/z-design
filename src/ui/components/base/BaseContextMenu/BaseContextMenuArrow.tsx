"use client";

import { cnState } from "../../../utils";
import { PrimitiveContextMenu } from "../../primitives";

export interface BaseContextMenuArrowProps extends PrimitiveContextMenu.Arrow.Props {}

export type BaseContextMenuArrowState = PrimitiveContextMenu.Arrow.State;

export const BaseContextMenuArrow = ({
  className,
  ...props
}: BaseContextMenuArrowProps) => {
  return (
    <PrimitiveContextMenu.Arrow
      data-slot="context-menu-arrow"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseContextMenuArrow {
  export type Props = BaseContextMenuArrowProps;
  export type State = BaseContextMenuArrowState;
}

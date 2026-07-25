"use client";

import { cnState } from "../../../utils";
import { PrimitiveContextMenu } from "../../primitives";

export interface BaseContextMenuCheckboxItemIndicatorProps extends PrimitiveContextMenu.CheckboxItemIndicator.Props {}

export type BaseContextMenuCheckboxItemIndicatorState = PrimitiveContextMenu.CheckboxItemIndicator.State;

export const BaseContextMenuCheckboxItemIndicator = ({
  className,
  ...props
}: BaseContextMenuCheckboxItemIndicatorProps) => {
  return (
    <PrimitiveContextMenu.CheckboxItemIndicator
      data-slot="context-menu-checkbox-item-indicator"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseContextMenuCheckboxItemIndicator {
  export type Props = BaseContextMenuCheckboxItemIndicatorProps;
  export type State = BaseContextMenuCheckboxItemIndicatorState;
}

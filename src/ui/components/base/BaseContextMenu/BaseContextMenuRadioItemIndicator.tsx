"use client";

import { cnState } from "../../../utils";
import { PrimitiveContextMenu } from "../../primitives";

export interface BaseContextMenuRadioItemIndicatorProps extends PrimitiveContextMenu.RadioItemIndicator.Props {}

export type BaseContextMenuRadioItemIndicatorState = PrimitiveContextMenu.RadioItemIndicator.State;

export const BaseContextMenuRadioItemIndicator = ({
  className,
  ...props
}: BaseContextMenuRadioItemIndicatorProps) => {
  return (
    <PrimitiveContextMenu.RadioItemIndicator
      data-slot="context-menu-radio-item-indicator"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseContextMenuRadioItemIndicator {
  export type Props = BaseContextMenuRadioItemIndicatorProps;
  export type State = BaseContextMenuRadioItemIndicatorState;
}

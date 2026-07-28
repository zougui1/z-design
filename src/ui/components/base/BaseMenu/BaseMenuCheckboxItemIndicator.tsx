"use client";

import { cnState } from "../../../utils";
import { PrimitiveMenu } from "../../primitives";

export interface BaseMenuCheckboxItemIndicatorProps extends PrimitiveMenu.CheckboxItemIndicator.Props {}

export type BaseMenuCheckboxItemIndicatorState = PrimitiveMenu.CheckboxItemIndicator.State;

export const BaseMenuCheckboxItemIndicator = ({
  className,
  ...props
}: BaseMenuCheckboxItemIndicatorProps) => {
  return (
    <PrimitiveMenu.CheckboxItemIndicator
      data-slot="menu-checkbox-item-indicator"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseMenuCheckboxItemIndicator {
  export type Props = BaseMenuCheckboxItemIndicatorProps;
  export type State = BaseMenuCheckboxItemIndicatorState;
}

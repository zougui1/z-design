"use client";

import { cnState } from "../../../utils";
import { PrimitiveMenu } from "../../primitives";

export interface BaseMenuRadioItemIndicatorProps extends PrimitiveMenu.RadioItemIndicator.Props {}

export type BaseMenuRadioItemIndicatorState = PrimitiveMenu.RadioItemIndicator.State;

export const BaseMenuRadioItemIndicator = ({
  className,
  ...props
}: BaseMenuRadioItemIndicatorProps) => {
  return (
    <PrimitiveMenu.RadioItemIndicator
      data-slot="menu-radio-item-indicator"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseMenuRadioItemIndicator {
  export type Props = BaseMenuRadioItemIndicatorProps;
  export type State = BaseMenuRadioItemIndicatorState;
}

"use client";

import { cnState } from "../../../utils";
import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxArrowProps extends PrimitiveCombobox.Arrow.Props {}

export type BaseComboboxArrowState = PrimitiveCombobox.Arrow.State;

export const BaseComboboxArrow = ({
  className,
  ...props
}: BaseComboboxArrowProps) => {
  return (
    <PrimitiveCombobox.Arrow
      data-slot="combobox-arrow"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseComboboxArrow {
  export type Props = BaseComboboxArrowProps;
  export type State = BaseComboboxArrowState;
}

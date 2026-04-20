"use client";

import { cnState } from "../../../utils";
import { PrimitiveNumberField } from "../../primitives";

export interface BaseNumberFieldDecrementProps
  extends PrimitiveNumberField.Decrement.Props {}

export const BaseNumberFieldDecrement = ({
  className,
  ...props
}: BaseNumberFieldDecrementProps) => {
  return (
    <PrimitiveNumberField.Decrement
      data-slot="number-field-decrement"
      {...props}
      className={cnState("cursor-pointer", className)}
    />
  );
};

export namespace BaseNumberFieldDecrement {
  export type Props = BaseNumberFieldDecrementProps;
  export type State = PrimitiveNumberField.Decrement.State;
}

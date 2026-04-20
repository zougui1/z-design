"use client";

import { cnState } from "../../../utils";
import { PrimitiveNumberField } from "../../primitives";

export interface BaseNumberFieldIncrementProps
  extends PrimitiveNumberField.Increment.Props {}

export const BaseNumberFieldIncrement = ({
  className,
  ...props
}: BaseNumberFieldIncrementProps) => {
  return (
    <PrimitiveNumberField.Increment
      data-slot="number-field-increment"
      {...props}
      className={cnState("cursor-pointer", className)}
    />
  );
};

export namespace BaseNumberFieldIncrement {
  export type Props = BaseNumberFieldIncrementProps;
  export type State = PrimitiveNumberField.Increment.State;
}

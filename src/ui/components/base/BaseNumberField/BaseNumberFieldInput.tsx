"use client";

import { PrimitiveNumberField } from "../../primitives";

export interface BaseNumberFieldInputProps
  extends PrimitiveNumberField.Input.Props {}

export const BaseNumberFieldInput = (props: BaseNumberFieldInputProps) => {
  return (
    <PrimitiveNumberField.Input data-slot="number-field-input" {...props} />
  );
};

export namespace BaseNumberFieldInput {
  export type Props = BaseNumberFieldInputProps;
  export type State = PrimitiveNumberField.Input.State;
}

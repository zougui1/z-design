"use client";

import { PrimitiveNumberField } from "../../primitives";

export interface BaseNumberFieldGroupProps
  extends PrimitiveNumberField.Group.Props {}

export const BaseNumberFieldGroup = (props: BaseNumberFieldGroupProps) => {
  return (
    <PrimitiveNumberField.Group data-slot="number-field-group" {...props} />
  );
};

export namespace BaseNumberFieldGroup {
  export type Props = BaseNumberFieldGroupProps;
  export type State = PrimitiveNumberField.Group.State;
}

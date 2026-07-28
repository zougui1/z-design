"use client";

import { PrimitiveNumberField } from "../../primitives";

export interface BaseNumberFieldRootProps
  extends PrimitiveNumberField.Root.Props {}

export const BaseNumberFieldRoot = (props: BaseNumberFieldRootProps) => {
  return <PrimitiveNumberField.Root data-slot="number-field-root" {...props} />;
};

export namespace BaseNumberFieldRoot {
  export type Props = BaseNumberFieldRootProps;
  export type State = PrimitiveNumberField.Root.State;
}

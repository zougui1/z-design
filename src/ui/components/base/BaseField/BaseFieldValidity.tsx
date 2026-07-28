"use client";

import { PrimitiveField } from "../../primitives";

export interface BaseFieldValidityProps extends PrimitiveField.Validity.Props {}

export type BaseFieldValidityState = PrimitiveField.Validity.State;

export const BaseFieldValidity = (props: BaseFieldValidityProps) => {
  return <PrimitiveField.Validity data-slot="field-validity" {...props} />;
};

export namespace BaseFieldValidity {
  export type Props = BaseFieldValidityProps;
  export type State = BaseFieldValidityState;
}

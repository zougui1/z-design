"use client";

import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxValueProps extends PrimitiveCombobox.Value.Props {}

export type BaseComboboxValueState = PrimitiveCombobox.Value.State;

export const BaseComboboxValue = (props: BaseComboboxValueProps) => {
  return <PrimitiveCombobox.Value data-slot="combobox-value" {...props} />;
};

export namespace BaseComboboxValue {
  export type Props = BaseComboboxValueProps;
  export type State = BaseComboboxValueState;
}

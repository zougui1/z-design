"use client";

import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxGroupProps extends PrimitiveCombobox.Group.Props {}

export type BaseComboboxGroupState = PrimitiveCombobox.Group.State;

export const BaseComboboxGroup = (props: BaseComboboxGroupProps) => {
  return <PrimitiveCombobox.Group data-slot="combobox-group" {...props} />;
};

export namespace BaseComboboxGroup {
  export type Props = BaseComboboxGroupProps;
  export type State = BaseComboboxGroupState;
}

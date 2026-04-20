"use client";

import { cnState } from "../../../utils";
import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxInputGroupProps extends PrimitiveCombobox.InputGroup.Props {}

export type BaseComboboxInputGroupState = PrimitiveCombobox.InputGroup.State;

export const BaseComboboxInputGroup = ({
  className,
  ...props
}: BaseComboboxInputGroupProps) => {
  return (
    <PrimitiveCombobox.InputGroup
      data-slot="combobox-input-group"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseComboboxInputGroup {
  export type Props = BaseComboboxInputGroupProps;
  export type State = BaseComboboxInputGroupState;
}

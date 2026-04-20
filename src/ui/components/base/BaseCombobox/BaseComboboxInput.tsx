"use client";

import { cnState } from "../../../utils";
import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxInputProps extends PrimitiveCombobox.Input.Props {}

export type BaseComboboxInputState = PrimitiveCombobox.Input.State;

export const BaseComboboxInput = ({
  className,
  ...props
}: BaseComboboxInputProps) => {
  return (
    <PrimitiveCombobox.Input
      data-slot="combobox-input"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseComboboxInput {
  export type Props = BaseComboboxInputProps;
  export type State = BaseComboboxInputState;
}

"use client";

import { cnState } from "../../../utils";
import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxChipsInputProps
  extends PrimitiveCombobox.Input.Props {}

export type BaseComboboxChipsInputState = PrimitiveCombobox.Input.State;

export const BaseComboboxChipsInput = ({
  className,
  ...props
}: BaseComboboxChipsInputProps) => {
  return (
    <PrimitiveCombobox.Input
      data-slot="combobox-input"
      {...props}
      className={cnState("min-w-16 flex-1 outline-none", className)}
    />
  );
};

export namespace BaseComboboxChipsInput {
  export type Props = BaseComboboxChipsInputProps;
  export type State = BaseComboboxChipsInputState;
}

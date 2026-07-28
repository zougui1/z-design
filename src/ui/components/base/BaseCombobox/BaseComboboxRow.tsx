"use client";

import { cnState } from "../../../utils";
import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxRowProps extends PrimitiveCombobox.Row.Props {}

export type BaseComboboxRowState = PrimitiveCombobox.Row.State;

export const BaseComboboxRow = ({
  className,
  ...props
}: BaseComboboxRowProps) => {
  return (
    <PrimitiveCombobox.Row
      data-slot="combobox-row"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseComboboxRow {
  export type Props = BaseComboboxRowProps;
  export type State = BaseComboboxRowState;
}

"use client";

import { cnState } from "../../../utils";
import { PrimitiveCombobox } from "../../primitives";
import { BaseButton } from "../BaseButton";

export interface BaseComboboxChipRemoveProps
  extends PrimitiveCombobox.ChipRemove.Props {}

export type BaseComboboxChipRemoveState = PrimitiveCombobox.ChipRemove.State;

export const BaseComboboxChipRemove = ({
  className,
  ...props
}: BaseComboboxChipRemoveProps) => {
  return (
    <PrimitiveCombobox.ChipRemove
      data-slot="combobox-chip-remove"
      render={<BaseButton variant="ghost" size="icon-xs" color="neutral" />}
      {...props}
      className={cnState("-ml-1 opacity-50 hover:opacity-100", className)}
    />
  );
};

export namespace BaseComboboxChipRemove {
  export type Props = BaseComboboxChipRemoveProps;
  export type State = BaseComboboxChipRemoveState;
}

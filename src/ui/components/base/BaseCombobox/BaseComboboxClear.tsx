"use client";

import { X } from "lucide-react";

import { PrimitiveCombobox } from "../../primitives";
import { BaseInputGroup } from "../BaseInputGroup";

export interface BaseComboboxClearProps extends PrimitiveCombobox.Clear.Props {}

export type BaseComboboxClearState = PrimitiveCombobox.Clear.State;

export const BaseComboboxClear = (props: BaseComboboxClearProps) => {
  return (
    <PrimitiveCombobox.Clear
      data-slot="combobox-clear"
      render={
        <BaseInputGroup.Button variant="ghost" size="icon-xs">
          <X className="pointer-events-none" />
        </BaseInputGroup.Button>
      }
      {...props}
    />
  );
};

export namespace BaseComboboxClear {
  export type Props = BaseComboboxClearProps;
  export type State = BaseComboboxClearState;
}

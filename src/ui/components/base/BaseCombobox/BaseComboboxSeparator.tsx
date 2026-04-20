"use client";

import { cnState } from "../../../utils";
import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxSeparatorProps
  extends PrimitiveCombobox.Separator.Props {}

export type BaseComboboxSeparatorState = PrimitiveCombobox.Separator.State;

export const BaseComboboxSeparator = ({
  className,
  ...props
}: BaseComboboxSeparatorProps) => {
  return (
    <PrimitiveCombobox.Separator
      data-slot="combobox-separator"
      {...props}
      className={cnState("bg-border -mx-1 my-1 h-px", className)}
    />
  );
};

export namespace BaseComboboxSeparator {
  export type Props = BaseComboboxSeparatorProps;
  export type State = BaseComboboxSeparatorState;
}

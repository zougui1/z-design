"use client";

import { cnState } from "../../../utils";
import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxLabelProps extends PrimitiveCombobox.Label.Props {}

export type BaseComboboxLabelState = PrimitiveCombobox.Label.State;

export const BaseComboboxLabel = ({
  className,
  ...props
}: BaseComboboxLabelProps) => {
  return (
    <PrimitiveCombobox.Label
      data-slot="combobox-label"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseComboboxLabel {
  export type Props = BaseComboboxLabelProps;
  export type State = BaseComboboxLabelState;
}

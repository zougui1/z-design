"use client";

import { cnState } from "../../../utils";
import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxGroupLabelProps
  extends PrimitiveCombobox.GroupLabel.Props {}

export type BaseComboboxGroupLabelState = PrimitiveCombobox.GroupLabel.State;

export const BaseComboboxGroupLabel = ({
  className,
  ...props
}: BaseComboboxGroupLabelProps) => {
  return (
    <PrimitiveCombobox.GroupLabel
      data-slot="combobox-group-label"
      {...props}
      className={cnState(
        "text-muted-foreground px-2 py-1.5 text-xs",
        className,
      )}
    />
  );
};

export namespace BaseComboboxGroupLabel {
  export type Props = BaseComboboxGroupLabelProps;
  export type State = BaseComboboxGroupLabelState;
}

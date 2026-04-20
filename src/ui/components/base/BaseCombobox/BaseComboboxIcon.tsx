"use client";

import { cnState } from "../../../utils";
import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxIconProps extends PrimitiveCombobox.Icon.Props {}

export type BaseComboboxIconState = PrimitiveCombobox.Icon.State;

export const BaseComboboxIcon = ({
  className,
  ...props
}: BaseComboboxIconProps) => {
  return (
    <PrimitiveCombobox.Icon
      data-slot="combobox-icon"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseComboboxIcon {
  export type Props = BaseComboboxIconProps;
  export type State = BaseComboboxIconState;
}

"use client";

import { cnState } from "../../../utils";
import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxBackdropProps extends PrimitiveCombobox.Backdrop.Props {}

export type BaseComboboxBackdropState = PrimitiveCombobox.Backdrop.State;

export const BaseComboboxBackdrop = ({
  className,
  ...props
}: BaseComboboxBackdropProps) => {
  return (
    <PrimitiveCombobox.Backdrop
      data-slot="combobox-backdrop"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseComboboxBackdrop {
  export type Props = BaseComboboxBackdropProps;
  export type State = BaseComboboxBackdropState;
}

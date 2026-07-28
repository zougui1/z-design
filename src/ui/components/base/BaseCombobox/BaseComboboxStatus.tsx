"use client";

import { cnState } from "../../../utils";
import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxStatusProps extends PrimitiveCombobox.Status.Props {}

export type BaseComboboxStatusState = PrimitiveCombobox.Status.State;

export const BaseComboboxStatus = ({
  className,
  ...props
}: BaseComboboxStatusProps) => {
  return (
    <PrimitiveCombobox.Status
      data-slot="combobox-status"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseComboboxStatus {
  export type Props = BaseComboboxStatusProps;
  export type State = BaseComboboxStatusState;
}

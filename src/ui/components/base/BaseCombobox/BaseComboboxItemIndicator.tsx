"use client";

import { cnState } from "../../../utils";
import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxItemIndicatorProps
  extends PrimitiveCombobox.ItemIndicator.Props {}

export type BaseComboboxItemIndicatorState =
  PrimitiveCombobox.ItemIndicator.State;

export const BaseComboboxItemIndicator = ({
  className,
  ...props
}: BaseComboboxItemIndicatorProps) => {
  return (
    <PrimitiveCombobox.ItemIndicator
      data-slot="combobox-item-indicator"
      {...props}
      className={cnState(
        `pointer-events-none absolute right-2 flex size-4 items-center
        justify-center`,
        className,
      )}
    />
  );
};

export namespace BaseComboboxItemIndicator {
  export type Props = BaseComboboxItemIndicatorProps;
  export type State = BaseComboboxItemIndicatorState;
}

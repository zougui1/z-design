"use client";

import { cnState } from "../../../utils";
import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxListProps extends PrimitiveCombobox.List.Props {}

export type BaseComboboxListState = PrimitiveCombobox.List.State;

export const BaseComboboxList = ({
  className,
  ...props
}: BaseComboboxListProps) => {
  return (
    <PrimitiveCombobox.List
      data-slot="combobox-list"
      {...props}
      className={cnState(
        `no-scrollbar
        max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))]
        scroll-py-1 overflow-y-auto overscroll-contain p-1 data-empty:p-0`,
        className,
      )}
    />
  );
};

export namespace BaseComboboxList {
  export type Props = BaseComboboxListProps;
  export type State = BaseComboboxListState;
}

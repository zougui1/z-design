"use client";

import { cnState } from "../../../utils";
import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxEmptyProps extends PrimitiveCombobox.Empty.Props {}

export type BaseComboboxEmptyState = PrimitiveCombobox.Empty.State;

export const BaseComboboxEmpty = ({
  className,
  ...props
}: BaseComboboxEmptyProps) => {
  return (
    <PrimitiveCombobox.Empty
      data-slot="combobox-empty"
      {...props}
      className={cnState(
        `text-muted-foreground flex w-full justify-center py-2 text-center
        text-sm empty:hidden`,
        className,
      )}
    />
  );
};

export namespace BaseComboboxEmpty {
  export type Props = BaseComboboxEmptyProps;
  export type State = BaseComboboxEmptyState;
}

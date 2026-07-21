"use client";

import { cnState } from "../../../utils";
import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxChipsProps extends PrimitiveCombobox.Chips.Props {}

export type BaseComboboxChipsState = PrimitiveCombobox.Chips.State;

export const BaseComboboxChips = ({
  className,
  ...props
}: BaseComboboxChipsProps) => {
  return (
    <PrimitiveCombobox.Chips
      data-slot="combobox-chips"
      {...props}
      className={cnState(
        `border-border focus-within:border-ring focus-within:ring-ring/50
        has-aria-invalid:border-destructive has-aria-invalid:ring-destructive/20
        bg-background-light flex min-h-8 flex-wrap items-center gap-1 rounded-lg
        border bg-clip-padding px-2.5 py-1 text-sm transition-colors
        focus-within:ring-3 has-aria-invalid:ring-3
        has-data-[slot=combobox-chip]:px-1`,
        className,
      )}
    />
  );
};

export namespace BaseComboboxChips {
  export type Props = BaseComboboxChipsProps;
  export type State = BaseComboboxChipsState;
}

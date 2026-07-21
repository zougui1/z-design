"use client";

import { cnState } from "../../../utils";
import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxChipProps extends PrimitiveCombobox.Chip.Props {}

export type BaseComboboxChipState = PrimitiveCombobox.Chip.State;

export const BaseComboboxChip = ({
  className,
  ...props
}: BaseComboboxChipProps) => {
  return (
    <PrimitiveCombobox.Chip
      data-slot="combobox-chip"
      {...props}
      className={cnState(
        `bg-background/70 text-foreground flex h-[calc(--spacing(5.25))] w-fit
        items-center justify-center gap-1 overflow-hidden rounded-sm px-1.5
        text-xs font-medium whitespace-nowrap has-disabled:pointer-events-none
        has-disabled:cursor-not-allowed has-disabled:opacity-50
        has-data-[slot=combobox-chip-remove]:pr-0`,
        className,
      )}
    />
  );
};

export namespace BaseComboboxChip {
  export type Props = BaseComboboxChipProps;
  export type State = BaseComboboxChipState;
}

"use client";

import { cnState } from "../../../utils";
import { PrimitiveRadio } from "../../primitives";

export interface BaseRadioRootProps extends PrimitiveRadio.Root.Props {}

export type BaseRadioRootState = PrimitiveRadio.Root.State;

export const BaseRadioRoot = ({ className, ...props }: BaseRadioRootProps) => {
  return (
    <PrimitiveRadio.Root
      data-slot="radio-root"
      {...props}
      className={cnState(
        `peer border-input focus-visible:border-ring focus-visible:ring-ring/50
        aria-invalid:border-destructive aria-invalid:ring-destructive/20
        dark:bg-input/30 dark:aria-invalid:border-destructive/50
        dark:aria-invalid:ring-destructive/40 data-checked:border-primary
        data-checked:text-primary relative flex size-4 shrink-0
        items-center justify-center rounded-full border transition-colors
        outline-none group-has-disabled/field:opacity-50 after:absolute
        after:-inset-x-3 after:-inset-y-2 focus-visible:ring-3
        not-data-disabled:cursor-pointer data-disabled:cursor-not-allowed
        data-disabled:opacity-50 aria-invalid:ring-3`,
        className,
      )}
    />
  );
};

export namespace BaseRadioRoot {
  export type Props = BaseRadioRootProps;
  export type State = BaseRadioRootState;
}

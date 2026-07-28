"use client";

import { cnState } from "../../../utils";
import { PrimitiveCheckbox } from "../../primitives";

export interface BaseCheckboxRootProps extends PrimitiveCheckbox.Root.Props {}

export type BaseCheckboxRootState = PrimitiveCheckbox.Root.State;

export const BaseCheckboxRoot = ({
  className,
  ...props
}: BaseCheckboxRootProps) => {
  return (
    <PrimitiveCheckbox.Root
      data-slot="checkbox-root"
      {...props}
      className={cnState(
        `peer border-input focus-visible:border-ring focus-visible:ring-ring/50
        aria-invalid:border-destructive aria-invalid:ring-destructive/20
        aria-invalid:aria-checked:border-primary dark:bg-input/30
        dark:aria-invalid:border-destructive/50
        dark:aria-invalid:ring-destructive/40 data-checked:border-primary
        data-checked:bg-primary data-checked:text-primary-foreground
        dark:data-checked:bg-primary relative flex size-4 shrink-0
        cursor-pointer items-center justify-center rounded-[4px] border
        transition-colors outline-none group-has-disabled/field:opacity-50
        after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-3
        disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3`,
        className,
      )}
    />
  );
};

export namespace BaseCheckboxRoot {
  export type Props = BaseCheckboxRootProps;
  export type State = BaseCheckboxRootState;
}

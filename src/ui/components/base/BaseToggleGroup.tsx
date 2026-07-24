"use client";

import { type ClassValueState, cnState } from "~/ui/utils";

import { PrimitiveToggleGroup } from "../primitives";

export interface BaseToggleGroupProps
  extends Omit<PrimitiveToggleGroup.Props, "className"> {
  className?: ClassValueState<PrimitiveToggleGroup.State>;
}

export const BaseToggleGroup = ({
  className,
  ...props
}: BaseToggleGroupProps) => {
  return (
    <PrimitiveToggleGroup
      data-slot="toggle-group"
      className={cnState(
        `inline-flex w-fit items-center gap-1 rounded-md
        data-[orientation=vertical]:flex-col
        data-[orientation=vertical]:items-stretch`,
        className,
      )}
      {...props}
    />
  );
};

export namespace BaseToggleGroup {
  export type Props = BaseToggleGroupProps;
  export type State = PrimitiveToggleGroup.State;
}

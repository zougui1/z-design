"use client";

import { cnState } from "../../../utils";
import { PrimitiveNumberField } from "../../primitives";

export interface BaseNumberFieldIncrementProps
  extends PrimitiveNumberField.Increment.Props {}

export const BaseNumberFieldIncrement = ({
  className,
  ...props
}: BaseNumberFieldIncrementProps) => {
  return (
    <PrimitiveNumberField.Increment
      data-slot="number-field-increment"
      {...props}
      className={cnState(
        `bg-background-light text-muted-foreground hover:bg-accent
        hover:text-foreground flex size-9 shrink-0 cursor-pointer items-center
        justify-center transition-colors select-none
        disabled:pointer-events-none disabled:opacity-40 [&_svg]:size-4`,
        className,
      )}
    />
  );
};

export namespace BaseNumberFieldIncrement {
  export type Props = BaseNumberFieldIncrementProps;
  export type State = PrimitiveNumberField.Increment.State;
}

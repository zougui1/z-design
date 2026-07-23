"use client";

import { cnState } from "../../../utils";
import { PrimitiveNumberField } from "../../primitives";

export interface BaseNumberFieldDecrementProps
  extends PrimitiveNumberField.Decrement.Props {}

export const BaseNumberFieldDecrement = ({
  className,
  ...props
}: BaseNumberFieldDecrementProps) => {
  return (
    <PrimitiveNumberField.Decrement
      data-slot="number-field-decrement"
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

export namespace BaseNumberFieldDecrement {
  export type Props = BaseNumberFieldDecrementProps;
  export type State = PrimitiveNumberField.Decrement.State;
}

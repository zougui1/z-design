"use client";

import { cnState } from "../../../utils";
import { PrimitiveRadioGroup } from "../../primitives";

export interface BaseRadioGroupProps extends PrimitiveRadioGroup.Props {}

export type BaseRadioGroupState = PrimitiveRadioGroup.State;

export const BaseRadioGroup = ({
  className,
  ...props
}: BaseRadioGroupProps) => {
  return (
    <PrimitiveRadioGroup
      data-slot="radio-group"
      {...props}
      className={cnState("flex flex-col gap-2", className)}
    />
  );
};

export namespace BaseRadioGroup {
  export type Props = BaseRadioGroupProps;
  export type State = BaseRadioGroupState;
}

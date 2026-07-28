"use client";

import { PrimitiveMenu } from "../../primitives";

export interface BaseMenuRadioGroupProps
  extends PrimitiveMenu.RadioGroup.Props {}

export type BaseMenuRadioGroupState = PrimitiveMenu.RadioGroup.State;

export const BaseMenuRadioGroup = (props: BaseMenuRadioGroupProps) => {
  return <PrimitiveMenu.RadioGroup data-slot="menu-radio-group" {...props} />;
};

export namespace BaseMenuRadioGroup {
  export type Props = BaseMenuRadioGroupProps;
  export type State = BaseMenuRadioGroupState;
}

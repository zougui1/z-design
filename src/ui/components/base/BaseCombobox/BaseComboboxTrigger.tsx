"use client";

import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxTriggerProps
  extends PrimitiveCombobox.Trigger.Props {}

export type BaseComboboxTriggerState = PrimitiveCombobox.Trigger.State;

export const BaseComboboxTrigger = (props: BaseComboboxTriggerProps) => {
  return <PrimitiveCombobox.Trigger data-slot="combobox-trigger" {...props} />;
};

export namespace BaseComboboxTrigger {
  export type Props = BaseComboboxTriggerProps;
  export type State = BaseComboboxTriggerState;
}

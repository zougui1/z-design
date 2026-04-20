"use client";
import { PrimitiveAutocomplete } from "../../primitives";

export interface BaseAutocompleteTriggerProps
  extends PrimitiveAutocomplete.Trigger.Props {}

export type BaseAutocompleteTriggerState = PrimitiveAutocomplete.Trigger.State;

export const BaseAutocompleteTrigger = (
  props: BaseAutocompleteTriggerProps,
) => {
  return (
    <PrimitiveAutocomplete.Trigger
      data-slot="autocomplete-trigger"
      {...props}
    />
  );
};

export namespace BaseAutocompleteTrigger {
  export type Props = BaseAutocompleteTriggerProps;
  export type State = BaseAutocompleteTriggerState;
}

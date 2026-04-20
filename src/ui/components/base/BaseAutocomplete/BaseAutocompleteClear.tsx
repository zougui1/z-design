"use client";
import { PrimitiveAutocomplete } from "../../primitives";

export interface BaseAutocompleteClearProps
  extends PrimitiveAutocomplete.Clear.Props {}

export type BaseAutocompleteClearState = PrimitiveAutocomplete.Clear.State;

export const BaseAutocompleteClear = (props: BaseAutocompleteClearProps) => {
  return (
    <PrimitiveAutocomplete.Clear data-slot="autocomplete-clear" {...props} />
  );
};

export namespace BaseAutocompleteClear {
  export type Props = BaseAutocompleteClearProps;
  export type State = BaseAutocompleteClearState;
}

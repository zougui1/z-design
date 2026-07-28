"use client";

import { PrimitiveNumberField } from "../../primitives";

export interface BaseNumberFieldScrubAreaProps
  extends PrimitiveNumberField.ScrubArea.Props {}

export const BaseNumberFieldScrubArea = (
  props: BaseNumberFieldScrubAreaProps,
) => {
  return (
    <PrimitiveNumberField.ScrubArea
      data-slot="number-field-scrub-area"
      {...props}
    />
  );
};

export namespace BaseNumberFieldScrubArea {
  export type Props = BaseNumberFieldScrubAreaProps;
  export type State = PrimitiveNumberField.ScrubArea.State;
}

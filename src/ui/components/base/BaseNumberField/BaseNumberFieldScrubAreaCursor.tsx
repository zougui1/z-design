"use client";

import { PrimitiveNumberField } from "../../primitives";

export interface BaseNumberFieldScrubAreaCursorProps
  extends PrimitiveNumberField.ScrubAreaCursor.Props {}

export const BaseNumberFieldScrubAreaCursor = (
  props: BaseNumberFieldScrubAreaCursorProps,
) => {
  return (
    <PrimitiveNumberField.ScrubAreaCursor
      data-slot="number-field-scrub-area-cursor"
      {...props}
    />
  );
};

export namespace BaseNumberFieldScrubAreaCursor {
  export type Props = BaseNumberFieldScrubAreaCursorProps;
  export type State = PrimitiveNumberField.ScrubAreaCursor.State;
}

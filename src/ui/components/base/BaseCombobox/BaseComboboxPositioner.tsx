"use client";

import { cnState } from "../../../utils";
import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxPositionerProps
  extends PrimitiveCombobox.Positioner.Props {}

export type BaseComboboxPositionerState = PrimitiveCombobox.Positioner.State;

export const BaseComboboxPositioner = ({
  className,
  side = "bottom",
  sideOffset = 6,
  align = "start",
  alignOffset = 0,
  ...props
}: BaseComboboxPositionerProps) => {
  return (
    <PrimitiveCombobox.Positioner
      data-slot="combobox-positioner"
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
      {...props}
      className={cnState("isolate z-50", className)}
    />
  );
};

export namespace BaseComboboxPositioner {
  export type Props = BaseComboboxPositionerProps;
  export type State = BaseComboboxPositionerState;
}

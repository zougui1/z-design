"use client";

import { cnState } from "../../../utils";
import { PrimitiveField } from "../../primitives";

export interface BaseFieldControlProps extends PrimitiveField.Control.Props {}

export type BaseFieldControlState = PrimitiveField.Control.State;

export const BaseFieldControl = ({
  className,
  ...props
}: BaseFieldControlProps) => {
  return (
    <PrimitiveField.Control
      data-slot="field-control"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseFieldControl {
  export type Props = BaseFieldControlProps;
  export type State = BaseFieldControlState;
}

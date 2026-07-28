"use client";

import { cnState } from "../../../utils";
import { PrimitiveField } from "../../primitives";

export interface BaseFieldItemProps extends PrimitiveField.Item.Props {}

export type BaseFieldItemState = PrimitiveField.Item.State;

export const BaseFieldItem = ({
  className,
  ...props
}: BaseFieldItemProps) => {
  return (
    <PrimitiveField.Item
      data-slot="field-item"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseFieldItem {
  export type Props = BaseFieldItemProps;
  export type State = BaseFieldItemState;
}

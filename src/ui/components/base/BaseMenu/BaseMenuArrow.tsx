"use client";

import { cnState } from "../../../utils";
import { PrimitiveMenu } from "../../primitives";

export interface BaseMenuArrowProps extends PrimitiveMenu.Arrow.Props {}

export type BaseMenuArrowState = PrimitiveMenu.Arrow.State;

export const BaseMenuArrow = ({
  className,
  ...props
}: BaseMenuArrowProps) => {
  return (
    <PrimitiveMenu.Arrow
      data-slot="menu-arrow"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseMenuArrow {
  export type Props = BaseMenuArrowProps;
  export type State = BaseMenuArrowState;
}

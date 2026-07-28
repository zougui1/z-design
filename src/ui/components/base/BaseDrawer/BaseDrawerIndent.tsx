"use client";

import { cnState } from "../../../utils";
import { PrimitiveDrawer } from "../../primitives";

export interface BaseDrawerIndentProps extends PrimitiveDrawer.Indent.Props {}

export type BaseDrawerIndentState = PrimitiveDrawer.Indent.State;

export const BaseDrawerIndent = ({
  className,
  ...props
}: BaseDrawerIndentProps) => {
  return (
    <PrimitiveDrawer.Indent
      data-slot="drawer-indent"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseDrawerIndent {
  export type Props = BaseDrawerIndentProps;
  export type State = BaseDrawerIndentState;
}

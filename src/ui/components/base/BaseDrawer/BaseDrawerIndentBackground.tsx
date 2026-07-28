"use client";

import { cnState } from "../../../utils";
import { PrimitiveDrawer } from "../../primitives";

export interface BaseDrawerIndentBackgroundProps extends PrimitiveDrawer.IndentBackground.Props {}

export type BaseDrawerIndentBackgroundState = PrimitiveDrawer.IndentBackground.State;

export const BaseDrawerIndentBackground = ({
  className,
  ...props
}: BaseDrawerIndentBackgroundProps) => {
  return (
    <PrimitiveDrawer.IndentBackground
      data-slot="drawer-indent-background"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseDrawerIndentBackground {
  export type Props = BaseDrawerIndentBackgroundProps;
  export type State = BaseDrawerIndentBackgroundState;
}

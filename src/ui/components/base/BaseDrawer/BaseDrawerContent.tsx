"use client";

import { cnState } from "../../../utils";
import { PrimitiveDrawer } from "../../primitives";

export interface BaseDrawerContentProps extends PrimitiveDrawer.Content.Props {}

export type BaseDrawerContentState = PrimitiveDrawer.Content.State;

export const BaseDrawerContent = ({
  className,
  ...props
}: BaseDrawerContentProps) => {
  return (
    <PrimitiveDrawer.Content
      data-slot="drawer-content"
      {...props}
      className={cnState("mx-auto w-full max-w-lg", className)}
    />
  );
};

export namespace BaseDrawerContent {
  export type Props = BaseDrawerContentProps;
  export type State = BaseDrawerContentState;
}

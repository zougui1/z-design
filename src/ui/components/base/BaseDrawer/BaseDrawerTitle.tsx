"use client";

import { cnState } from "../../../utils";
import { PrimitiveDrawer } from "../../primitives";

export interface BaseDrawerTitleProps extends PrimitiveDrawer.Title.Props {}

export type BaseDrawerTitleState = PrimitiveDrawer.Title.State;

export const BaseDrawerTitle = ({
  className,
  ...props
}: BaseDrawerTitleProps) => {
  return (
    <PrimitiveDrawer.Title
      data-slot="drawer-title"
      {...props}
      className={cnState(
        "cn-font-heading text-foreground text-base font-medium",
        className,
      )}
    />
  );
};

export namespace BaseDrawerTitle {
  export type Props = BaseDrawerTitleProps;
  export type State = BaseDrawerTitleState;
}

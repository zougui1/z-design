"use client";

import { cnState } from "../../../utils";
import { PrimitiveDrawer } from "../../primitives";

export interface BaseDrawerDescriptionProps
  extends PrimitiveDrawer.Description.Props {}

export type BaseDrawerDescriptionState = PrimitiveDrawer.Description.State;

export const BaseDrawerDescription = ({
  className,
  ...props
}: BaseDrawerDescriptionProps) => {
  return (
    <PrimitiveDrawer.Description
      data-slot="drawer-description"
      {...props}
      className={cnState("text-muted-foreground text-sm", className)}
    />
  );
};

export namespace BaseDrawerDescription {
  export type Props = BaseDrawerDescriptionProps;
  export type State = BaseDrawerDescriptionState;
}

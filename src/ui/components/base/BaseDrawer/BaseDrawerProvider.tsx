"use client";

import { cnState } from "../../../utils";
import { PrimitiveDrawer } from "../../primitives";

export interface BaseDrawerProviderProps extends PrimitiveDrawer.Provider.Props {}

export type BaseDrawerProviderState = PrimitiveDrawer.Provider.State;

export const BaseDrawerProvider = ({
  className,
  ...props
}: BaseDrawerProviderProps) => {
  return (
    <PrimitiveDrawer.Provider
      data-slot="drawer-provider"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseDrawerProvider {
  export type Props = BaseDrawerProviderProps;
  export type State = BaseDrawerProviderState;
}

"use client";

import { cnState } from "../../../utils";
import { PrimitiveMenu } from "../../primitives";

export interface BaseMenuViewportProps extends PrimitiveMenu.Viewport.Props {}

export type BaseMenuViewportState = PrimitiveMenu.Viewport.State;

export const BaseMenuViewport = ({
  className,
  ...props
}: BaseMenuViewportProps) => {
  return (
    <PrimitiveMenu.Viewport
      data-slot="menu-viewport"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseMenuViewport {
  export type Props = BaseMenuViewportProps;
  export type State = BaseMenuViewportState;
}

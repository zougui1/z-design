"use client";

import { cnState } from "../../../utils";
import { PrimitiveDrawer } from "../../primitives";

export interface BaseDrawerBackdropProps
  extends PrimitiveDrawer.Backdrop.Props {}

export type BaseDrawerBackdropState = PrimitiveDrawer.Backdrop.State;

export const BaseDrawerBackdrop = ({
  className,
  ...props
}: BaseDrawerBackdropProps) => {
  return (
    <PrimitiveDrawer.Backdrop
      data-slot="drawer-backdrop"
      {...props}
      className={cnState(
        `fixed inset-0 min-h-dvh bg-black
        opacity-[calc(var(--backdrop-opacity)*(1-var(--drawer-swipe-progress)))]
        transition-opacity duration-450 ease-[cubic-bezier(0.32,0.72,0,1)]
        [--backdrop-opacity:0.2] [--bleed:3rem] data-ending-style:opacity-0
        data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)]
        data-starting-style:opacity-0 data-swiping:duration-0
        supports-[-webkit-touch-callout:none]:absolute
        dark:[--backdrop-opacity:0.7]`,
        className,
      )}
    />
  );
};

export namespace BaseDrawerBackdrop {
  export type Props = BaseDrawerBackdropProps;
  export type State = BaseDrawerBackdropState;
}

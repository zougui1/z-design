"use client";

import { type VariantProps, tv } from "tailwind-variants";

import { cnState } from "../../../utils";
import { PrimitiveDrawer } from "../../primitives";

const variants = tv({
  variants: {
    side: {
      right: "items-stretch justify-end",
      bottom: "items-end",
      left: "items-stretch justify-start",
      top: "items-start",
    },
  },

  defaultVariants: {
    side: "right",
  },
});

export interface BaseDrawerViewportProps
  extends PrimitiveDrawer.Viewport.Props, VariantProps<typeof variants> {}

export type BaseDrawerViewportState = PrimitiveDrawer.Viewport.State;

export const BaseDrawerViewport = ({
  className,
  side = "right",
  ...props
}: BaseDrawerViewportProps) => {
  return (
    <PrimitiveDrawer.Viewport
      data-slot="drawer-viewport"
      data-side={side}
      {...props}
      className={cnState(
        `group/drawer-viewport fixed inset-0 flex p-(--viewport-padding)
        [--viewport-padding:0px]
        supports-[-webkit-touch-callout:none]:[--viewport-padding:0.625rem]`,
        variants({ side }),
        className,
      )}
    />
  );
};

export namespace BaseDrawerViewport {
  export type Props = BaseDrawerViewportProps;
  export type State = BaseDrawerViewportState;
}

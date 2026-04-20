"use client";

import { cnState } from "../../../utils";
import { PrimitiveDrawer } from "../../primitives";

export interface BaseDrawerPopupProps extends PrimitiveDrawer.Popup.Props {}

export type BaseDrawerPopupState = PrimitiveDrawer.Popup.State;

export const BaseDrawerPopup = ({
  className,
  ...props
}: BaseDrawerPopupProps) => {
  return (
    <PrimitiveDrawer.Popup
      data-slot="drawer-popup"
      {...props}
      className={cnState(
        `bg-background outline-border group/drawer-popup -mr-12 h-full w-92
        max-w-[calc(100vw-3rem+3rem)]
        transform-[translateX(var(--drawer-swipe-movement-x))] touch-auto
        overflow-y-auto overscroll-contain pr-14 outline-1 transition-transform
        duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] [--bleed:3rem]
        data-ending-style:transform-[translateX(calc(100%-var(--bleed)+var(--viewport-padding)+2px))]
        data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)]
        data-starting-style:transform-[translateX(calc(100%-var(--bleed)+var(--viewport-padding)+2px))]
        data-swiping:select-none supports-[-webkit-touch-callout:none]:mr-0
        supports-[-webkit-touch-callout:none]:w-[20rem]
        supports-[-webkit-touch-callout:none]:max-w-[calc(100vw-20px)]
        supports-[-webkit-touch-callout:none]:rounded-[10px]
        supports-[-webkit-touch-callout:none]:pr-6
        supports-[-webkit-touch-callout:none]:[--bleed:0px]`,
        className,
      )}
    />
  );
};

export namespace BaseDrawerPopup {
  export type Props = BaseDrawerPopupProps;
  export type State = BaseDrawerPopupState;
}

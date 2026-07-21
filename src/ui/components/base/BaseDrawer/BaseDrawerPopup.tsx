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
        `bg-background outline-border group/drawer-popup relative -mr-12
        touch-auto overflow-y-auto overscroll-contain outline-1
        transition-transform duration-450 ease-[cubic-bezier(0.32,0.72,0,1)]
        [--bleed:3rem]
        data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)]
        data-swiping:select-none supports-[-webkit-touch-callout:none]:mr-0
        supports-[-webkit-touch-callout:none]:w-[20rem]
        supports-[-webkit-touch-callout:none]:max-w-[calc(100vw-20px)]
        supports-[-webkit-touch-callout:none]:rounded-[10px]
        supports-[-webkit-touch-callout:none]:pr-6
        supports-[-webkit-touch-callout:none]:[--bleed:0px]`,

        `group-data-[side=right]/drawer-viewport:h-full
        group-data-[side=right]/drawer-viewport:w-92
        group-data-[side=right]/drawer-viewport:max-w-[calc(100vw-3rem+3rem)]
        group-data-[side=right]/drawer-viewport:transform-[translateX(var(--drawer-swipe-movement-x))]
        group-data-[side=right]/drawer-viewport:pr-14
        group-data-[side=right]/drawer-viewport:data-ending-style:transform-[translateX(calc(100%-var(--bleed)+var(--viewport-padding)+2px))]
        group-data-[side=right]/drawer-viewport:data-starting-style:transform-[translateX(calc(100%-var(--bleed)+var(--viewport-padding)+2px))]`,

        `group-data-[side=bottom]/drawer-viewport:h-92
        group-data-[side=bottom]/drawer-viewport:max-h-screen
        group-data-[side=bottom]/drawer-viewport:w-full
        group-data-[side=bottom]/drawer-viewport:transform-[translateY(var(--drawer-swipe-movement-y))]
        group-data-[side=bottom]/drawer-viewport:data-ending-style:transform-[translateY(calc(100%-var(--bleed)+var(--viewport-padding)+2px))]
        group-data-[side=bottom]/drawer-viewport:data-starting-style:transform-[translateY(calc(100%-var(--bleed)+var(--viewport-padding)+2px))]`,

        `group-data-[side=left]/drawer-viewport:h-full
        group-data-[side=left]/drawer-viewport:w-92
        group-data-[side=left]/drawer-viewport:max-w-[calc(100vw-3rem+3rem)]
        group-data-[side=left]/drawer-viewport:transform-[translateX(var(--drawer-swipe-movement-x))]
        group-data-[side=left]/drawer-viewport:data-ending-style:transform-[translateX(calc(var(--viewport-padding)-var(--bleed)-2px))]
        group-data-[side=left]/drawer-viewport:data-starting-style:transform-[translateX(calc(var(--viewport-padding)-var(--bleed)-2px))]`,

        `group-data-[side=top]/drawer-viewport:max-h-screen
        group-data-[side=top]/drawer-viewport:min-h-92
        group-data-[side=top]/drawer-viewport:w-full
        group-data-[side=top]/drawer-viewport:transform-[translateY(var(--drawer-swipe-movement-y))]
        group-data-[side=top]/drawer-viewport:data-ending-style:transform-[translateY(calc(var(--viewport-padding)-var(--bleed)-2px))]
        group-data-[side=top]/drawer-viewport:data-starting-style:transform-[translateY(calc(var(--viewport-padding)-var(--bleed)-2px))]`,
        className,
      )}
    />
  );
};

export namespace BaseDrawerPopup {
  export type Props = BaseDrawerPopupProps;
  export type State = BaseDrawerPopupState;
}

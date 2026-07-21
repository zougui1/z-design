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
      className={cnState(
        "mx-auto w-full max-w-lg",

        "group-has-data-[slot=drawer-handle]/drawer-popup:group-data-[side=right]/drawer-viewport:pl-4",

        "group-has-data-[slot=drawer-handle]/drawer-popup:group-data-[side=bottom]/drawer-viewport:pt-4",

        "group-has-data-[slot=drawer-handle]/drawer-popup:group-data-[side=left]/drawer-viewport:pr-4",

        "group-has-data-[slot=drawer-handle]/drawer-popup:group-data-[side=top]/drawer-viewport:pb-4",

        className,
      )}
    />
  );
};

export namespace BaseDrawerContent {
  export type Props = BaseDrawerContentProps;
  export type State = BaseDrawerContentState;
}

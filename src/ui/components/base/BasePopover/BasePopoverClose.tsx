"use client";
import { PrimitivePopover } from "../../primitives";

export interface BasePopoverCloseProps extends PrimitivePopover.Close.Props {}

export type BasePopoverCloseState = PrimitivePopover.Close.State;

export const BasePopoverClose = (props: BasePopoverCloseProps) => {
  return <PrimitivePopover.Close data-slot="popover-close" {...props} />;
};

export namespace BasePopoverClose {
  export type Props = BasePopoverCloseProps;
  export type State = BasePopoverCloseState;
}

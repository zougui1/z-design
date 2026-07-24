"use client";
import { PrimitivePopover } from "../../primitives";

export interface BasePopoverRootProps extends PrimitivePopover.Root.Props {}

export type BasePopoverRootState = PrimitivePopover.Root.State;

export const BasePopoverRoot = (props: BasePopoverRootProps) => {
  return <PrimitivePopover.Root data-slot="popover-root" {...props} />;
};

export namespace BasePopoverRoot {
  export type Props = BasePopoverRootProps;
  export type State = BasePopoverRootState;
}

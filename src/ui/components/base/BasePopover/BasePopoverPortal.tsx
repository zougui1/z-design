"use client";
import { PrimitivePopover } from "../../primitives";

export interface BasePopoverPortalProps extends PrimitivePopover.Portal.Props {}

export type BasePopoverPortalState = PrimitivePopover.Portal.State;

export const BasePopoverPortal = (props: BasePopoverPortalProps) => {
  return <PrimitivePopover.Portal data-slot="popover-portal" {...props} />;
};

export namespace BasePopoverPortal {
  export type Props = BasePopoverPortalProps;
  export type State = BasePopoverPortalState;
}

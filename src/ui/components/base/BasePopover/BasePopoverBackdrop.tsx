"use client";
import { cnState } from "../../../utils";
import { PrimitivePopover } from "../../primitives";

export interface BasePopoverBackdropProps
  extends PrimitivePopover.Backdrop.Props {}

export type BasePopoverBackdropState = PrimitivePopover.Backdrop.State;

export const BasePopoverBackdrop = ({
  className,
  ...props
}: BasePopoverBackdropProps) => {
  return (
    <PrimitivePopover.Backdrop
      data-slot="popover-backdrop"
      {...props}
      className={cnState(
        `fixed inset-0 z-40 transition-all duration-150
        data-ending-style:opacity-0 data-starting-style:opacity-0`,
        className,
      )}
    />
  );
};

export namespace BasePopoverBackdrop {
  export type Props = BasePopoverBackdropProps;
  export type State = BasePopoverBackdropState;
}

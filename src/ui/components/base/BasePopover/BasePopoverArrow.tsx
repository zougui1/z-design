"use client";
import { cnState } from "../../../utils";
import { PrimitivePopover } from "../../primitives";

export interface BasePopoverArrowProps extends PrimitivePopover.Arrow.Props {}

export type BasePopoverArrowState = PrimitivePopover.Arrow.State;

export const BasePopoverArrow = ({
  className,
  ...props
}: BasePopoverArrowProps) => {
  return (
    <PrimitivePopover.Arrow
      data-slot="popover-arrow"
      {...props}
      className={cnState(
        `bg-popover ring-foreground/10 z-40 size-2.5 rotate-45 rounded-[2px]
        ring-1 data-[side=bottom]:-top-1 data-[side=inline-end]:top-1/2!
        data-[side=inline-end]:-left-1 data-[side=inline-end]:-translate-y-1/2
        data-[side=inline-start]:top-1/2! data-[side=inline-start]:-right-1
        data-[side=inline-start]:-translate-y-1/2 data-[side=left]:top-1/2!
        data-[side=left]:-right-1 data-[side=left]:-translate-y-1/2
        data-[side=right]:top-1/2! data-[side=right]:-left-1
        data-[side=right]:-translate-y-1/2 data-[side=top]:-bottom-1`,
        className,
      )}
    />
  );
};

export namespace BasePopoverArrow {
  export type Props = BasePopoverArrowProps;
  export type State = BasePopoverArrowState;
}

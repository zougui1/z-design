"use client";

import { cnState } from "../../../utils";
import { PrimitiveTooltip } from "../../primitives";

export interface BaseTooltipArrowProps extends PrimitiveTooltip.Arrow.Props {}

export const BaseTooltipArrow = ({
  className,
  ...props
}: BaseTooltipArrowProps) => {
  return (
    <PrimitiveTooltip.Arrow
      data-slot="tooltip-arrow"
      {...props}
      className={cnState(
        `bg-foreground fill-foreground z-50 size-2.5
        translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px]
        data-[side=bottom]:top-1 data-[side=inline-end]:top-1/2!
        data-[side=inline-end]:-left-1 data-[side=inline-end]:-translate-y-1/2
        data-[side=inline-start]:top-1/2! data-[side=inline-start]:-right-1
        data-[side=inline-start]:-translate-y-1/2 data-[side=left]:top-1/2!
        data-[side=left]:-right-1 data-[side=left]:-translate-y-1/2
        data-[side=right]:top-1/2! data-[side=right]:-left-1
        data-[side=right]:-translate-y-1/2 data-[side=top]:-bottom-2.5`,
        className,
      )}
    />
  );
};

export namespace BaseTooltipArrow {
  export type Props = BaseTooltipArrowProps;
  export type State = PrimitiveTooltip.Arrow.State;
}

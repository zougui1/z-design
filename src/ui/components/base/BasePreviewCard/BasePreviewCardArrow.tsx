"use client";
import { cnState } from "../../../utils";
import { PrimitivePreviewCard } from "../../primitives";

export interface BasePreviewCardArrowProps
  extends PrimitivePreviewCard.Arrow.Props {}

export type BasePreviewCardArrowState = PrimitivePreviewCard.Arrow.State;

export const BasePreviewCardArrow = ({
  className,
  ...props
}: BasePreviewCardArrowProps) => {
  return (
    <PrimitivePreviewCard.Arrow
      data-slot="preview-card-arrow"
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

export namespace BasePreviewCardArrow {
  export type Props = BasePreviewCardArrowProps;
  export type State = BasePreviewCardArrowState;
}

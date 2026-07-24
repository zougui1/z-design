"use client";
import { cnState } from "../../../utils";
import { PrimitivePopover } from "../../primitives";

export interface BasePopoverTitleProps extends PrimitivePopover.Title.Props {}

export type BasePopoverTitleState = PrimitivePopover.Title.State;

export const BasePopoverTitle = ({
  className,
  ...props
}: BasePopoverTitleProps) => {
  return (
    <PrimitivePopover.Title
      data-slot="popover-title"
      {...props}
      className={cnState(
        "cn-font-heading text-base leading-none font-medium",
        className,
      )}
    />
  );
};

export namespace BasePopoverTitle {
  export type Props = BasePopoverTitleProps;
  export type State = BasePopoverTitleState;
}

"use client";
import { cnState } from "../../../utils";
import { PrimitivePopover } from "../../primitives";

export interface BasePopoverDescriptionProps
  extends PrimitivePopover.Description.Props {}

export type BasePopoverDescriptionState = PrimitivePopover.Description.State;

export const BasePopoverDescription = ({
  className,
  ...props
}: BasePopoverDescriptionProps) => {
  return (
    <PrimitivePopover.Description
      data-slot="popover-description"
      {...props}
      className={cnState(
        `text-muted-foreground *:[a]:hover:text-foreground text-sm
        *:[a]:underline *:[a]:underline-offset-3`,
        className,
      )}
    />
  );
};

export namespace BasePopoverDescription {
  export type Props = BasePopoverDescriptionProps;
  export type State = BasePopoverDescriptionState;
}

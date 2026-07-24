"use client";
import { X } from "lucide-react";

import { cnState } from "~/ui/utils";

import { PrimitivePopover } from "../../primitives";
import { BaseButton, type BaseButtonProps } from "../BaseButton";

export interface BasePopoverCloseIconProps extends BaseButtonProps {}

export type BasePopoverCloseIconState = PrimitivePopover.Close.State;

export const BasePopoverCloseIcon = ({
  variant = "ghost",
  className,
  children,
  ...props
}: BasePopoverCloseIconProps) => {
  return (
    <PrimitivePopover.Close
      data-slot="popover-close-icon"
      render={
        <BaseButton
          className={cnState("absolute top-2 right-2", className)}
          size="icon-sm"
          variant={variant}
          {...props}
        >
          {children ?? (
            <>
              <X />
              <span className="sr-only">Close</span>
            </>
          )}
        </BaseButton>
      }
    />
  );
};

export namespace BasePopoverCloseIcon {
  export type Props = BasePopoverCloseIconProps;
  export type State = BasePopoverCloseIconState;
}

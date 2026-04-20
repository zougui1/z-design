"use client";
import { X } from "lucide-react";

import { cnState } from "~/ui/utils";

import { PrimitiveDialog } from "../../primitives";
import { BaseButton, type BaseButtonProps } from "../BaseButton";

export interface BaseDialogCloseIconProps extends BaseButtonProps {}

export type BaseDialogCloseIconState = PrimitiveDialog.Close.State;

export const BaseDialogCloseIcon = ({
  variant = "ghost",
  className,
  children,
  ...props
}: BaseDialogCloseIconProps) => {
  return (
    <PrimitiveDialog.Close
      data-slot="dialog-close-icon"
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

export namespace BaseDialogCloseIcon {
  export type Props = BaseDialogCloseIconProps;
  export type State = BaseDialogCloseIconState;
}

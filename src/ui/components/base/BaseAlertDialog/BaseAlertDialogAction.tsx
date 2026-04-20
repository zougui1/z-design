"use client";
import { useRef } from "react";

import { PrimitiveAlertDialog } from "../../primitives";
import { BaseButton, type BaseButtonProps } from "../BaseButton";
import { BaseAlertDialogClose } from "./BaseAlertDialogClose";

export interface BaseAlertDialogActionProps extends Omit<
  BaseButtonProps,
  "onClick"
> {
  closeOnClick?: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement>,
    close: () => void,
  ) => void;
}

export type BaseAlertDialogActionState = PrimitiveAlertDialog.Close.State;

const noClose = () =>
  console.warn("Unnecessary close() call with closeOnClick=true");

const ManualClose = ({ onClick, ...props }: BaseAlertDialogActionProps) => {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <BaseAlertDialogClose hidden />

      <BaseButton
        data-slot="alert-dialog-action"
        {...props}
        onClick={
          onClick
            ? (e) => onClick(e, () => closeRef.current?.click())
            : undefined
        }
      />
    </>
  );
};

export const BaseAlertDialogAction = ({
  closeOnClick = true,
  color = "destructive",
  onClick,
  ...props
}: BaseAlertDialogActionProps) => {
  if (!closeOnClick) {
    return <ManualClose {...props} color={color} onClick={onClick} />;
  }

  return (
    <PrimitiveAlertDialog.Close
      data-slot="alert-dialog-action"
      render={
        <BaseButton
          {...props}
          color={color}
          onClick={onClick ? (e) => onClick(e, noClose) : undefined}
        />
      }
    />
  );
};

export namespace BaseAlertDialogAction {
  export type Props = BaseAlertDialogActionProps;
  export type State = BaseAlertDialogActionState;
}

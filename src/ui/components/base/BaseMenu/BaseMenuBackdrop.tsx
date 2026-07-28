"use client";

import { cnState } from "../../../utils";
import { PrimitiveMenu } from "../../primitives";

export interface BaseMenuBackdropProps extends PrimitiveMenu.Backdrop.Props {}

export type BaseMenuBackdropState = PrimitiveMenu.Backdrop.State;

export const BaseMenuBackdrop = ({
  className,
  ...props
}: BaseMenuBackdropProps) => {
  return (
    <PrimitiveMenu.Backdrop
      data-slot="menu-backdrop"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseMenuBackdrop {
  export type Props = BaseMenuBackdropProps;
  export type State = BaseMenuBackdropState;
}

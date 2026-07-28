"use client";

import { cnState } from "../../../utils";
import { PrimitiveMenu } from "../../primitives";

export interface BaseMenuSeparatorProps extends PrimitiveMenu.Separator.Props {}

export type BaseMenuSeparatorState = PrimitiveMenu.Separator.State;

export const BaseMenuSeparator = ({
  className,
  ...props
}: BaseMenuSeparatorProps) => {
  return (
    <PrimitiveMenu.Separator
      data-slot="menu-separator"
      {...props}
      className={cnState("bg-border -mx-1 my-1 h-px", className)}
    />
  );
};

export namespace BaseMenuSeparator {
  export type Props = BaseMenuSeparatorProps;
  export type State = BaseMenuSeparatorState;
}

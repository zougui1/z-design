"use client";

import { cnState } from "../../../utils";
import { PrimitiveMenubar } from "../../primitives";

export interface BaseMenubarRootProps extends PrimitiveMenubar.Props {}

export type BaseMenubarRootState = PrimitiveMenubar.State;

export const BaseMenubarRoot = ({
  className,
  ...props
}: BaseMenubarRootProps) => {
  return (
    <PrimitiveMenubar
      data-slot="menubar"
      {...props}
      className={cnState(
        `bg-background-light border-border shadow-xs inline-flex items-center
        gap-0.5 rounded-md border p-1
        data-[orientation=vertical]:flex-col
        data-[orientation=vertical]:items-stretch`,
        className,
      )}
    />
  );
};

export namespace BaseMenubarRoot {
  export type Props = BaseMenubarRootProps;
  export type State = BaseMenubarRootState;
}

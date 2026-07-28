"use client";

import {
  BaseMenuPositioner,
  type BaseMenuPositionerProps,
  type BaseMenuPositionerState,
} from "./BaseMenuPositioner";

export interface BaseMenuSubPositionerProps extends BaseMenuPositionerProps {
  inset?: boolean;
}

export const BaseMenuSubPositioner = (props: BaseMenuSubPositionerProps) => {
  return (
    <BaseMenuPositioner
      data-slot="menu-sub-positioner"
      align="start"
      alignOffset={-3}
      side="right"
      sideOffset={0}
      {...props}
    />
  );
};

export namespace BaseMenuSubPositioner {
  export type Props = BaseMenuSubPositionerProps;
  export type State = BaseMenuPositionerState;
}

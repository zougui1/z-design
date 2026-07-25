"use client";

import {
  BaseContextMenuPositioner,
  type BaseContextMenuPositionerProps,
  type BaseContextMenuPositionerState,
} from "./BaseContextMenuPositioner";

export interface BaseContextMenuSubPositionerProps extends BaseContextMenuPositionerProps {
  inset?: boolean;
}

export const BaseContextMenuSubPositioner = (props: BaseContextMenuSubPositionerProps) => {
  return (
    <BaseContextMenuPositioner
      data-slot="context-menu-sub-positioner"
      align="start"
      alignOffset={-3}
      side="right"
      sideOffset={0}
      {...props}
    />
  );
};

export namespace BaseContextMenuSubPositioner {
  export type Props = BaseContextMenuSubPositionerProps;
  export type State = BaseContextMenuPositionerState;
}

"use client";

import { cnState } from "../../../utils";
import { PrimitiveContextMenu } from "../../primitives";

export interface BaseContextMenuTriggerProps
  extends PrimitiveContextMenu.Trigger.Props {}

export type BaseContextMenuTriggerState =
  PrimitiveContextMenu.Trigger.State;

export const BaseContextMenuTrigger = ({
  className,
  ...props
}: BaseContextMenuTriggerProps) => {
  return (
    <PrimitiveContextMenu.Trigger
      data-slot="context-menu-trigger"
      {...props}
      className={cnState("select-none", className)}
    />
  );
};

export namespace BaseContextMenuTrigger {
  export type Props = BaseContextMenuTriggerProps;
  export type State = BaseContextMenuTriggerState;
}

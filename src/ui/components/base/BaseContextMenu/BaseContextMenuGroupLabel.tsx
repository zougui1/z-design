"use client";

import { cnState } from "../../../utils";
import { PrimitiveContextMenu } from "../../primitives";

export interface BaseContextMenuGroupLabelProps
  extends PrimitiveContextMenu.GroupLabel.Props {
  inset?: boolean;
}

export type BaseContextMenuGroupLabelState = PrimitiveContextMenu.GroupLabel.State;

export const BaseContextMenuGroupLabel = ({
  className,
  inset,
  ...props
}: BaseContextMenuGroupLabelProps) => {
  return (
    <PrimitiveContextMenu.GroupLabel
      data-slot="context-menu-group-label"
      data-inset={inset ? "true" : undefined}
      {...props}
      className={cnState(
        "text-muted-foreground px-1.5 py-1 text-xs font-medium data-inset:pl-7",
        className,
      )}
    />
  );
};

export namespace BaseContextMenuGroupLabel {
  export type Props = BaseContextMenuGroupLabelProps;
  export type State = BaseContextMenuGroupLabelState;
}

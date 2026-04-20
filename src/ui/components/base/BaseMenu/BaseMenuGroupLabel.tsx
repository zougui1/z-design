"use client";

import { cnState } from "../../../utils";
import { PrimitiveMenu } from "../../primitives";

export interface BaseMenuGroupLabelProps
  extends PrimitiveMenu.GroupLabel.Props {
  inset?: boolean;
}

export type BaseMenuGroupLabelState = PrimitiveMenu.GroupLabel.State;

export const BaseMenuGroupLabel = ({
  className,
  inset,
  ...props
}: BaseMenuGroupLabelProps) => {
  return (
    <PrimitiveMenu.GroupLabel
      data-slot="menu-group-label"
      data-inset={inset ? "true" : undefined}
      {...props}
      className={cnState(
        "text-muted-foreground px-1.5 py-1 text-xs font-medium data-inset:pl-7",
        className,
      )}
    />
  );
};

export namespace BaseMenuGroupLabel {
  export type Props = BaseMenuGroupLabelProps;
  export type State = BaseMenuGroupLabelState;
}

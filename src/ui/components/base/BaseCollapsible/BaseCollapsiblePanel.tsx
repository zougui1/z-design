"use client";

import { cnState } from "../../../utils";
import { PrimitiveCollapsible } from "../../primitives";

export interface BaseCollapsiblePanelProps
  extends PrimitiveCollapsible.Panel.Props {}

export type BaseCollapsiblePanelState = PrimitiveCollapsible.Panel.State;

export const BaseCollapsiblePanel = ({
  className,
  ...props
}: BaseCollapsiblePanelProps) => {
  return (
    <PrimitiveCollapsible.Panel
      data-slot="collapsible-panel"
      {...props}
      className={cnState(
        `h-(--collapsible-panel-height) overflow-hidden transition-all
        duration-150 ease-out data-ending-style:h-0 data-starting-style:h-0
        [&[hidden]:not([hidden='until-found'])]:hidden`,
        className,
      )}
    />
  );
};

export namespace BaseCollapsiblePanel {
  export type Props = BaseCollapsiblePanelProps;
  export type State = BaseCollapsiblePanelState;
}

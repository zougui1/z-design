"use client";

import { cnState } from "../../../utils";
import { PrimitiveTabs } from "../../primitives";

export interface BaseTabsPanelProps extends PrimitiveTabs.Panel.Props {}

export const BaseTabsPanel = ({ className, ...props }: BaseTabsPanelProps) => {
  return (
    <PrimitiveTabs.Panel
      data-slot="tabs-panel"
      {...props}
      className={cnState(
        "focus-visible:ring-ring rounded-md outline-none focus-visible:ring-2",
        className,
      )}
    />
  );
};

export namespace BaseTabsPanel {
  export type Props = BaseTabsPanelProps;
  export type State = PrimitiveTabs.Panel.State;
}

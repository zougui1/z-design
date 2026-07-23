"use client";

import { cnState } from "../../../utils";
import { PrimitiveTabs } from "../../primitives";

export interface BaseTabsIndicatorProps extends PrimitiveTabs.Indicator.Props {}

/**
 * Optional sliding pill that tracks the active tab (positioned via base-ui's
 * `--active-tab-*` CSS vars). Use it as an alternative to the default per-tab
 * background — when using it, clear the tab's `data-[active]` background.
 */
export const BaseTabsIndicator = ({
  className,
  ...props
}: BaseTabsIndicatorProps) => {
  return (
    <PrimitiveTabs.Indicator
      data-slot="tabs-indicator"
      {...props}
      className={cnState(
        `bg-background-light absolute top-1/2 left-0
        h-(--active-tab-height) w-(--active-tab-width)
        -translate-y-1/2 translate-x-(--active-tab-left) rounded-sm shadow-sm
        transition-all duration-200 ease-out`,
        className,
      )}
    />
  );
};

export namespace BaseTabsIndicator {
  export type Props = BaseTabsIndicatorProps;
  export type State = PrimitiveTabs.Indicator.State;
}

"use client";

import { cnState } from "../../../utils";
import { PrimitiveTabs } from "../../primitives";

export interface BaseTabsTabProps extends PrimitiveTabs.Tab.Props {}

export const BaseTabsTab = ({ className, ...props }: BaseTabsTabProps) => {
  return (
    <PrimitiveTabs.Tab
      data-slot="tabs-tab"
      {...props}
      className={cnState(
        // base-ui keeps disabled tabs focusable, so it marks them with
        // `data-disabled` (not the native `disabled` attribute) — style off that
        `text-muted-foreground data-active:bg-background-light
        data-active:text-foreground data-active:shadow-sm
        focus-visible:ring-ring inline-flex h-7 flex-1 cursor-pointer
        items-center justify-center gap-1.5 rounded-sm px-2.5 py-1 text-sm
        font-medium whitespace-nowrap transition-colors focus-visible:ring-2
        focus-visible:outline-none data-disabled:cursor-not-allowed
        data-disabled:opacity-50 [&_svg]:size-4`,
        className,
      )}
    />
  );
};

export namespace BaseTabsTab {
  export type Props = BaseTabsTabProps;
  export type State = PrimitiveTabs.Tab.State;
}

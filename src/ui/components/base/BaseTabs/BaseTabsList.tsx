"use client";

import { cnState } from "../../../utils";
import { PrimitiveTabs } from "../../primitives";

export interface BaseTabsListProps extends PrimitiveTabs.List.Props {}

export const BaseTabsList = ({ className, ...props }: BaseTabsListProps) => {
  return (
    <PrimitiveTabs.List
      data-slot="tabs-list"
      {...props}
      className={cnState(
        `bg-muted text-muted-foreground relative inline-flex h-9 w-fit
        items-center justify-center rounded-md p-1`,
        className,
      )}
    />
  );
};

export namespace BaseTabsList {
  export type Props = BaseTabsListProps;
  export type State = PrimitiveTabs.List.State;
}

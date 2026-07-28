"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";

export interface BaseSelectListProps extends SelectPrimitive.List.Props {}
export type BaseSelectListState = SelectPrimitive.List.State;

export function BaseSelectList(props: BaseSelectListProps) {
  return <SelectPrimitive.List data-slot="select-list" {...props} />;
}

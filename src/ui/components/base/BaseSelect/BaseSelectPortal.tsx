"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";

export interface BaseSelectPortalProps extends SelectPrimitive.Portal.Props {}
export type BaseSelectPortalState = SelectPrimitive.Portal.State;

export function BaseSelectPortal(props: BaseSelectPortalProps) {
  return <SelectPrimitive.Portal data-slot="select-portal" {...props} />;
}

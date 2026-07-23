"use client";

import { Toast as BaseToast } from "@base-ui/react";

export interface BaseToastPortalProps extends BaseToast.Portal.Props {}

export function BaseToastPortal(props: BaseToastPortalProps) {
  return <BaseToast.Portal data-slot="toast-portal" {...props} />;
}

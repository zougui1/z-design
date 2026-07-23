"use client";

import { Toast as BaseToast } from "@base-ui/react";

export interface BaseToastProviderProps extends BaseToast.Provider.Props {}

export function BaseToastProvider(props: BaseToastProviderProps) {
  return <BaseToast.Provider {...props} />;
}

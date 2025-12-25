"use client";

import * as SelectPrimitive from "@radix-ui/react-select";

export interface SelectRootProps extends React.ComponentProps<
  typeof SelectPrimitive.Select
> {}

export function SelectRoot(props: SelectRootProps) {
  return <SelectPrimitive.Root data-slot="select-root" {...props} />;
}

"use client";

import * as SelectPrimitive from "@radix-ui/react-select";

export interface SelectValueProps extends React.ComponentProps<
  typeof SelectPrimitive.SelectValue
> {}

export function SelectValue(props: SelectValueProps) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

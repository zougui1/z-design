"use client";

import * as SelectPrimitive from "@radix-ui/react-select";

export interface SelectGroupProps extends React.ComponentProps<
  typeof SelectPrimitive.SelectGroup
> {}

export function SelectGroup(props: SelectGroupProps) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

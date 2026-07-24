"use client";

import { BaseSwitch } from "../base";

export interface SwitchProps extends BaseSwitch.Root.Props {
  slotProps?: {
    thumb?: Partial<BaseSwitch.Thumb.Props>;
  };
}

export const Switch = ({ color = "primary", slotProps, ...props }: SwitchProps) => {
  return (
    <BaseSwitch.Root color={color} {...props}>
      <BaseSwitch.Thumb color={color} {...slotProps?.thumb} />
    </BaseSwitch.Root>
  );
};

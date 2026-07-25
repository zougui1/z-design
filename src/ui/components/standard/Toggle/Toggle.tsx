"use client";

import { BaseToggle } from "../../base";

export interface ToggleProps extends BaseToggle.Props {}

export const Toggle = (props: ToggleProps) => {
  return <BaseToggle {...props} />;
};

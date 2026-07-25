"use client";

import { BaseKbd } from "../../base";

export interface KbdProps extends BaseKbd.Root.Props {
  /** Render a sequence of keys wrapped in a group (e.g. `["⌘", "K"]`). */
  keys?: React.ReactNode[];
  slotProps?: {
    group?: Partial<BaseKbd.Group.Props>;
  };
}

export const Kbd = ({ keys, children, slotProps, ...props }: KbdProps) => {
  if (keys && keys.length > 0) {
    return (
      <BaseKbd.Group {...slotProps?.group}>
        {keys.map((key, index) => (
          <BaseKbd.Root key={index} {...props}>
            {key}
          </BaseKbd.Root>
        ))}
      </BaseKbd.Group>
    );
  }

  return <BaseKbd.Root {...props}>{children}</BaseKbd.Root>;
};

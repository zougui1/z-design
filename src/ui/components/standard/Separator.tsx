"use client";

import { BaseSeparator } from "../base";

export interface SeparatorProps extends BaseSeparator.Root.Props {
  /** Optional label rendered in the middle of the separator. */
  children?: React.ReactNode;
  slotProps?: {
    group?: Partial<BaseSeparator.Group.Props>;
    content?: Partial<BaseSeparator.Content.Props>;
  };
}

export const Separator = ({ children, slotProps, ...props }: SeparatorProps) => {
  if (children == null) {
    return <BaseSeparator.Root {...props} />;
  }

  return (
    <BaseSeparator.Group {...slotProps?.group}>
      <BaseSeparator.Root {...props} />
      <BaseSeparator.Content {...slotProps?.content}>
        {children}
      </BaseSeparator.Content>
    </BaseSeparator.Group>
  );
};

"use client";

import { X } from "lucide-react";

import { cn } from "~/ui/utils";

import { BaseBadge } from "../../base";

export interface BadgeProps extends BaseBadge.Props {
  /** Icon rendered before the label. */
  icon?: React.ReactNode;
  /** When provided, renders a dismiss button that calls this handler. */
  onRemove?: () => void;
  slotProps?: {
    removeButton?: React.ComponentProps<"button">;
  };
}

export const Badge = ({
  icon,
  onRemove,
  children,
  slotProps,
  ...props
}: BadgeProps) => {
  return (
    <BaseBadge {...props}>
      {icon}
      {children}
      {onRemove && (
        <button
          type="button"
          aria-label="Remove"
          {...slotProps?.removeButton}
          onClick={onRemove}
          className={cn(
            `-mr-0.5 inline-flex cursor-pointer items-center justify-center
            rounded-full opacity-70 outline-none transition-opacity
            hover:opacity-100 focus-visible:opacity-100`,
            slotProps?.removeButton?.className,
          )}
        >
          <X />
        </button>
      )}
    </BaseBadge>
  );
};

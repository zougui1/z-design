"use client";

import { BaseButton, type BaseButtonProps } from "../BaseButton";

export interface BasePaginationButtonProps extends BaseButtonProps {
  isActive?: boolean;
}

export const BasePaginationButton = ({
  isActive,
  size = "icon",
  color = "neutral",
  ...props
}: BasePaginationButtonProps) => {
  return (
    <BaseButton
      variant={isActive ? "outline" : "ghost"}
      size={size}
      color={color}
      nativeButton={false}
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      {...props}
    />
  );
};

export namespace BasePaginationButton {
  export type Props = BasePaginationButtonProps;
}

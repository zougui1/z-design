"use client";

import { BaseAlert } from "../base";

export interface AlertProps extends Omit<BaseAlert.Root.Props, "title"> {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  slotProps?: {
    title?: Partial<BaseAlert.Title.Props>;
    description?: Partial<BaseAlert.Description.Props>;
  };
}

export const Alert = ({
  icon,
  title,
  description,
  children,
  slotProps,
  ...props
}: AlertProps) => {
  return (
    <BaseAlert.Root {...props}>
      {icon}

      {title && (
        <BaseAlert.Title {...slotProps?.title}>{title}</BaseAlert.Title>
      )}

      {(description || children) && (
        <BaseAlert.Description {...slotProps?.description}>
          {description}
          {children}
        </BaseAlert.Description>
      )}
    </BaseAlert.Root>
  );
};

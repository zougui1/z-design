"use client";

import { BaseCard } from "../../base";

export interface CardProps extends Omit<BaseCard.Root.Props, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  footer?: React.ReactNode;
  slotProps?: {
    header?: Partial<BaseCard.Header.Props>;
    title?: Partial<BaseCard.Title.Props>;
    description?: Partial<BaseCard.Description.Props>;
    action?: Partial<BaseCard.Action.Props>;
    content?: Partial<BaseCard.Content.Props>;
    footer?: Partial<BaseCard.Footer.Props>;
  };
}

export const Card = ({
  title,
  description,
  action,
  footer,
  children,
  slotProps,
  ...props
}: CardProps) => {
  return (
    <BaseCard.Root {...props}>
      {(title || description || action) && (
        <BaseCard.Header {...slotProps?.header}>
          {title && (
            <BaseCard.Title {...slotProps?.title}>{title}</BaseCard.Title>
          )}
          {description && (
            <BaseCard.Description {...slotProps?.description}>
              {description}
            </BaseCard.Description>
          )}
          {action && (
            <BaseCard.Action {...slotProps?.action}>{action}</BaseCard.Action>
          )}
        </BaseCard.Header>
      )}

      {children && (
        <BaseCard.Content {...slotProps?.content}>{children}</BaseCard.Content>
      )}

      {footer && (
        <BaseCard.Footer {...slotProps?.footer}>{footer}</BaseCard.Footer>
      )}
    </BaseCard.Root>
  );
};

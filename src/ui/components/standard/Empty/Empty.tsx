"use client";

import { BaseEmpty } from "../../base";

export interface EmptyProps extends Omit<BaseEmpty.Root.Props, "title"> {
  media?: React.ReactNode;
  mediaVariant?: BaseEmpty.Media.Variant;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  slotProps?: {
    header?: Partial<BaseEmpty.Header.Props>;
    media?: Partial<BaseEmpty.Media.Props>;
    title?: Partial<BaseEmpty.Title.Props>;
    description?: Partial<BaseEmpty.Description.Props>;
    content?: Partial<BaseEmpty.Content.Props>;
  };
}

export const Empty = ({
  media,
  mediaVariant = "icon",
  title,
  description,
  children,
  slotProps,
  ...props
}: EmptyProps) => {
  return (
    <BaseEmpty.Root {...props}>
      {(media || title || description) && (
        <BaseEmpty.Header {...slotProps?.header}>
          {media && (
            <BaseEmpty.Media variant={mediaVariant} {...slotProps?.media}>
              {media}
            </BaseEmpty.Media>
          )}
          {title && (
            <BaseEmpty.Title {...slotProps?.title}>{title}</BaseEmpty.Title>
          )}
          {description && (
            <BaseEmpty.Description {...slotProps?.description}>
              {description}
            </BaseEmpty.Description>
          )}
        </BaseEmpty.Header>
      )}

      {children && (
        <BaseEmpty.Content {...slotProps?.content}>
          {children}
        </BaseEmpty.Content>
      )}
    </BaseEmpty.Root>
  );
};

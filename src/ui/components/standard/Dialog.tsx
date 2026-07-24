"use client";

import { BaseButton, BaseDialog } from "../base";

export interface DialogProps extends Omit<BaseDialog.Root.Props, "children"> {
  /** Rendered inside a default Button trigger. Omit for fully controlled use. */
  trigger?: React.ReactNode;
  children?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  slotProps?: {
    trigger?: Partial<BaseButton.Props>;
    portal?: Partial<BaseDialog.Portal.Props>;
    backdrop?: Partial<BaseDialog.Backdrop.Props>;
    popup?: Partial<BaseDialog.Popup.Props>;
    header?: Partial<BaseDialog.Header.Props>;
    title?: Partial<BaseDialog.Title.Props>;
    description?: Partial<BaseDialog.Description.Props>;
    footer?: Partial<BaseDialog.Footer.Props>;
  };
}

export const Dialog = ({
  trigger,
  title,
  description,
  footer,
  children,
  slotProps,
  ...props
}: DialogProps) => {
  return (
    <BaseDialog.Root {...props}>
      {trigger != null && (
        <BaseDialog.Trigger render={<BaseButton {...slotProps?.trigger} />}>
          {trigger}
        </BaseDialog.Trigger>
      )}

      <BaseDialog.Portal {...slotProps?.portal}>
        <BaseDialog.Backdrop {...slotProps?.backdrop} />
        <BaseDialog.Popup {...slotProps?.popup}>
          {(title || description) && (
            <BaseDialog.Header {...slotProps?.header}>
              {title && (
                <BaseDialog.Title {...slotProps?.title}>{title}</BaseDialog.Title>
              )}
              {description && (
                <BaseDialog.Description {...slotProps?.description}>
                  {description}
                </BaseDialog.Description>
              )}
            </BaseDialog.Header>
          )}

          {children}

          {footer && (
            <BaseDialog.Footer {...slotProps?.footer}>{footer}</BaseDialog.Footer>
          )}
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
};

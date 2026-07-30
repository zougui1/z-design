"use client";

import { useRef } from "react";

import { mergeRefs } from "~/ui/utils";

import { BaseButton, BaseDialog } from "../../base";
import { Button, type ButtonProps } from "../Button";

export interface DialogAction extends Omit<ButtonProps, "onClick"> {
  /** Stable key for the rendered button. Falls back to the array index. */
  key?: React.Key;
  /** When `false`, clicking the action does not close the dialog. Defaults to `true`. */
  closeOnClick?: boolean;
  /** Receives the click event and a `close` function to dismiss the dialog programmatically. */
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement>,
    close: () => void,
  ) => void;
}

export interface DialogProps extends Omit<BaseDialog.Root.Props, "children"> {
  /** Rendered inside a default Button trigger. Omit for fully controlled use. */
  trigger?: React.ReactNode;
  children?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  /** Buttons rendered in the footer. Ignored when `footer` is provided. */
  actions?: DialogAction[];
  slotProps?: {
    trigger?: Partial<BaseButton.Props>;
    portal?: Partial<BaseDialog.Portal.Props>;
    backdrop?: Partial<BaseDialog.Backdrop.Props>;
    popup?: Partial<BaseDialog.Popup.Props>;
    header?: Partial<BaseDialog.Header.Props>;
    title?: Partial<BaseDialog.Title.Props>;
    description?: Partial<BaseDialog.Description.Props>;
    footer?: Partial<BaseDialog.Footer.Props>;
    /** Applied to every button rendered from `actions`. */
    action?: Partial<ButtonProps>;
    /** The hidden close button used to dismiss the dialog programmatically. */
    close?: Partial<BaseDialog.Close.Props>;
  };
}

export const Dialog = ({
  trigger,
  title,
  description,
  footer,
  actions,
  children,
  slotProps,
  ...props
}: DialogProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const close = () => closeButtonRef.current?.click();

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
          <BaseDialog.Close
            hidden
            {...slotProps?.close}
            ref={mergeRefs(closeButtonRef, slotProps?.close?.ref)}
          />

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

          {footer ? (
            <BaseDialog.Footer {...slotProps?.footer}>{footer}</BaseDialog.Footer>
          ) : actions && actions.length > 0 ? (
            <BaseDialog.Footer {...slotProps?.footer}>
              {actions.map(
                ({ key, closeOnClick, onClick, ...action }, index) => (
                  <Button
                    key={key ?? index}
                    {...slotProps?.action}
                    {...action}
                    onClick={(event) => {
                      onClick?.(event, close);
                      if (closeOnClick !== false && !event.defaultPrevented) {
                        close();
                      }
                    }}
                  />
                ),
              )}
            </BaseDialog.Footer>
          ) : null}
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
};

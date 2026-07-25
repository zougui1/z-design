"use client";

import { BaseAlertDialog, BaseButton } from "../../base";

export interface AlertDialogProps
  extends Omit<BaseAlertDialog.Root.Props<unknown>, "children"> {
  trigger?: React.ReactNode;
  children?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  media?: React.ReactNode;
  cancelLabel?: React.ReactNode;
  actionLabel?: React.ReactNode;
  onAction?: BaseAlertDialog.Action.Props["onClick"];
  slotProps?: {
    trigger?: Partial<BaseButton.Props>;
    portal?: Partial<BaseAlertDialog.Portal.Props>;
    backdrop?: Partial<BaseAlertDialog.Backdrop.Props>;
    popup?: Partial<BaseAlertDialog.Popup.Props>;
    header?: Partial<BaseAlertDialog.Header.Props>;
    media?: Partial<BaseAlertDialog.Media.Props>;
    title?: Partial<BaseAlertDialog.Title.Props>;
    description?: Partial<BaseAlertDialog.Description.Props>;
    footer?: Partial<BaseAlertDialog.Footer.Props>;
    cancel?: Partial<Omit<BaseAlertDialog.Cancel.Props, "children">>;
    action?: Partial<Omit<BaseAlertDialog.Action.Props, "children">>;
  };
}

export const AlertDialog = ({
  trigger,
  title,
  description,
  media,
  cancelLabel = "Cancel",
  actionLabel = "Continue",
  onAction,
  children,
  slotProps,
  ...props
}: AlertDialogProps) => {
  return (
    <BaseAlertDialog.Root {...props}>
      {trigger != null && (
        <BaseAlertDialog.Trigger render={<BaseButton {...slotProps?.trigger} />}>
          {trigger}
        </BaseAlertDialog.Trigger>
      )}

      <BaseAlertDialog.Portal {...slotProps?.portal}>
        <BaseAlertDialog.Backdrop {...slotProps?.backdrop} />
        <BaseAlertDialog.Popup {...slotProps?.popup}>
          <BaseAlertDialog.Header {...slotProps?.header}>
            {media && (
              <BaseAlertDialog.Media {...slotProps?.media}>
                {media}
              </BaseAlertDialog.Media>
            )}
            {title && (
              <BaseAlertDialog.Title {...slotProps?.title}>
                {title}
              </BaseAlertDialog.Title>
            )}
            {description && (
              <BaseAlertDialog.Description {...slotProps?.description}>
                {description}
              </BaseAlertDialog.Description>
            )}
          </BaseAlertDialog.Header>

          {children}

          <BaseAlertDialog.Footer {...slotProps?.footer}>
            <BaseAlertDialog.Cancel {...slotProps?.cancel}>
              {cancelLabel}
            </BaseAlertDialog.Cancel>
            <BaseAlertDialog.Action onClick={onAction} {...slotProps?.action}>
              {actionLabel}
            </BaseAlertDialog.Action>
          </BaseAlertDialog.Footer>
        </BaseAlertDialog.Popup>
      </BaseAlertDialog.Portal>
    </BaseAlertDialog.Root>
  );
};

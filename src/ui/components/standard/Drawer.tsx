"use client";

import { BaseButton, BaseDrawer } from "../base";

type DrawerSide = BaseDrawer.Viewport.Props["side"];

const swipeBySide = {
  left: "left",
  right: "right",
  top: "up",
  bottom: "down",
} as const;

export interface DrawerProps
  extends Omit<BaseDrawer.Root.Props, "swipeDirection" | "children"> {
  trigger?: React.ReactNode;
  children?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  /** Edge the drawer slides in from. Defaults to `right`. */
  side?: DrawerSide;
  hideHandle?: boolean;
  slotProps?: {
    trigger?: Partial<BaseButton.Props>;
    portal?: Partial<BaseDrawer.Portal.Props>;
    backdrop?: Partial<BaseDrawer.Backdrop.Props>;
    viewport?: Partial<Omit<BaseDrawer.Viewport.Props, "side">>;
    popup?: Partial<BaseDrawer.Popup.Props>;
    handle?: Partial<BaseDrawer.Handle.Props>;
    content?: Partial<BaseDrawer.Content.Props>;
    header?: Partial<BaseDrawer.Header.Props>;
    title?: Partial<BaseDrawer.Title.Props>;
    description?: Partial<BaseDrawer.Description.Props>;
    body?: Partial<BaseDrawer.Body.Props>;
    footer?: Partial<BaseDrawer.Footer.Props>;
  };
}

export const Drawer = ({
  trigger,
  title,
  description,
  footer,
  side = "right",
  hideHandle,
  children,
  slotProps,
  ...props
}: DrawerProps) => {
  return (
    <BaseDrawer.Root
      swipeDirection={swipeBySide[side ?? "right"]}
      {...props}
    >
      {trigger != null && (
        <BaseDrawer.Trigger render={<BaseButton {...slotProps?.trigger} />}>
          {trigger}
        </BaseDrawer.Trigger>
      )}

      <BaseDrawer.Portal {...slotProps?.portal}>
        <BaseDrawer.Backdrop {...slotProps?.backdrop} />
        <BaseDrawer.Viewport side={side} {...slotProps?.viewport}>
          <BaseDrawer.Popup {...slotProps?.popup}>
            {!hideHandle && <BaseDrawer.Handle {...slotProps?.handle} />}

            <BaseDrawer.Content {...slotProps?.content}>
              {(title || description) && (
                <BaseDrawer.Header {...slotProps?.header}>
                  {title && (
                    <BaseDrawer.Title {...slotProps?.title}>
                      {title}
                    </BaseDrawer.Title>
                  )}
                  {description && (
                    <BaseDrawer.Description {...slotProps?.description}>
                      {description}
                    </BaseDrawer.Description>
                  )}
                </BaseDrawer.Header>
              )}

              <BaseDrawer.Body {...slotProps?.body}>
                {children}
                {footer && (
                  <BaseDrawer.Footer {...slotProps?.footer}>
                    {footer}
                  </BaseDrawer.Footer>
                )}
              </BaseDrawer.Body>
            </BaseDrawer.Content>
          </BaseDrawer.Popup>
        </BaseDrawer.Viewport>
      </BaseDrawer.Portal>
    </BaseDrawer.Root>
  );
};

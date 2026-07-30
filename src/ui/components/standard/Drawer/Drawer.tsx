"use client";

import { useRef } from "react";

import { mergeRefs } from "~/ui/utils";

import { BaseDrawer } from "../../base";
import { Button, type ButtonProps } from "../Button";

type DrawerSide = BaseDrawer.Viewport.Props["side"];

export interface DrawerAction extends Omit<ButtonProps, "onClick"> {
  /** Stable key for the rendered button. Falls back to the array index. */
  key?: React.Key;
  /** When `false`, clicking the action does not close the drawer. Defaults to `true`. */
  closeOnClick?: boolean;
  /** Receives the click event and a `close` function to dismiss the drawer programmatically. */
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement>,
    close: () => void,
  ) => void;
}

const swipeBySide = {
  left: "left",
  right: "right",
  top: "up",
  bottom: "down",
} as const;

export interface DrawerProps extends Omit<
  BaseDrawer.Root.Props,
  "swipeDirection" | "children"
> {
  trigger?: React.ReactElement;
  children?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  /** Buttons rendered in the footer. Ignored when `footer` is provided. */
  actions?: DrawerAction[];
  /** Edge the drawer slides in from. Defaults to `right`. */
  side?: DrawerSide;
  hideHandle?: boolean;
  slotProps?: {
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
    /** Applied to every button rendered from `actions`. */
    action?: Partial<ButtonProps>;
    /** The hidden close button used to dismiss the drawer programmatically. */
    close?: Partial<BaseDrawer.Close.Props>;
  };
}

export const Drawer = ({
  trigger,
  title,
  description,
  footer,
  actions,
  side = "right",
  hideHandle,
  children,
  slotProps,
  ...props
}: DrawerProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const close = () => closeButtonRef.current?.click();

  return (
    <BaseDrawer.Root swipeDirection={swipeBySide[side ?? "right"]} {...props}>
      {trigger && <BaseDrawer.Trigger render={trigger} />}

      <BaseDrawer.Portal {...slotProps?.portal}>
        <BaseDrawer.Backdrop {...slotProps?.backdrop} />
        <BaseDrawer.Viewport side={side} {...slotProps?.viewport}>
          <BaseDrawer.Popup {...slotProps?.popup}>
            <BaseDrawer.Close
              hidden
              {...slotProps?.close}
              ref={mergeRefs(closeButtonRef, slotProps?.close?.ref)}
            />

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
                {footer ? (
                  <BaseDrawer.Footer {...slotProps?.footer}>
                    {footer}
                  </BaseDrawer.Footer>
                ) : actions && actions.length > 0 ? (
                  <BaseDrawer.Footer {...slotProps?.footer}>
                    {actions.map(
                      ({ key, closeOnClick, onClick, ...action }, index) => (
                        <Button
                          key={key ?? index}
                          {...slotProps?.action}
                          {...action}
                          onClick={(event) => {
                            onClick?.(event, close);
                            if (
                              closeOnClick !== false &&
                              !event.defaultPrevented
                            ) {
                              close();
                            }
                          }}
                        />
                      ),
                    )}
                  </BaseDrawer.Footer>
                ) : null}
              </BaseDrawer.Body>
            </BaseDrawer.Content>
          </BaseDrawer.Popup>
        </BaseDrawer.Viewport>
      </BaseDrawer.Portal>
    </BaseDrawer.Root>
  );
};

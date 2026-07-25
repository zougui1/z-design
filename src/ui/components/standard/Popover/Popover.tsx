"use client";

import { BaseButton, BasePopover } from "../../base";

export interface PopoverProps extends Omit<BasePopover.Root.Props, "children"> {
  /** Rendered inside a default Button trigger. Omit for fully controlled use. */
  trigger?: React.ReactNode;
  children?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  hideArrow?: boolean;
  side?: BasePopover.Positioner.Props["side"];
  sideOffset?: BasePopover.Positioner.Props["sideOffset"];
  align?: BasePopover.Positioner.Props["align"];
  alignOffset?: BasePopover.Positioner.Props["alignOffset"];
  slotProps?: {
    trigger?: Partial<BaseButton.Props>;
    portal?: Partial<BasePopover.Portal.Props>;
    positioner?: Partial<BasePopover.Positioner.Props>;
    popup?: Partial<BasePopover.Popup.Props>;
    header?: Partial<BasePopover.Header.Props>;
    title?: Partial<BasePopover.Title.Props>;
    description?: Partial<BasePopover.Description.Props>;
    footer?: Partial<BasePopover.Footer.Props>;
    arrow?: Partial<BasePopover.Arrow.Props>;
  };
}

export const Popover = ({
  trigger,
  title,
  description,
  footer,
  children,
  hideArrow,
  side,
  sideOffset,
  align,
  alignOffset,
  slotProps,
  ...props
}: PopoverProps) => {
  return (
    <BasePopover.Root {...props}>
      {trigger != null && (
        <BasePopover.Trigger render={<BaseButton {...slotProps?.trigger} />}>
          {trigger}
        </BasePopover.Trigger>
      )}

      <BasePopover.Portal {...slotProps?.portal}>
        <BasePopover.Positioner
          side={side}
          sideOffset={sideOffset}
          align={align}
          alignOffset={alignOffset}
          {...slotProps?.positioner}
        >
          <BasePopover.Popup {...slotProps?.popup}>
            {(title || description) && (
              <BasePopover.Header {...slotProps?.header}>
                {title && (
                  <BasePopover.Title {...slotProps?.title}>
                    {title}
                  </BasePopover.Title>
                )}
                {description && (
                  <BasePopover.Description {...slotProps?.description}>
                    {description}
                  </BasePopover.Description>
                )}
              </BasePopover.Header>
            )}

            {children}

            {footer && (
              <BasePopover.Footer {...slotProps?.footer}>
                {footer}
              </BasePopover.Footer>
            )}

            {!hideArrow && <BasePopover.Arrow {...slotProps?.arrow} />}
          </BasePopover.Popup>
        </BasePopover.Positioner>
      </BasePopover.Portal>
    </BasePopover.Root>
  );
};

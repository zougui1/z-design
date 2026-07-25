import { BaseTooltip } from "../../base";

export interface TooltipProps
  extends
    Omit<BaseTooltip.Popup.Props, "children" | "content">,
    Pick<BaseTooltip.Provider.Props, "closeDelay" | "delay" | "timeout">,
    Pick<
      BaseTooltip.Positioner.Props,
      "side" | "sideOffset" | "align" | "alignOffset"
    > {
  children: React.ReactElement;
  content?: React.ReactNode;
  hideArrow?: boolean;
  slotProps?: {
    root?: Omit<Partial<BaseTooltip.Root.Props>, "children">;
    portal?: Omit<Partial<BaseTooltip.Portal.Props>, "children">;
    positioner?: Omit<Partial<BaseTooltip.Positioner.Props>, "children">;
    arrow?: Partial<BaseTooltip.Arrow.Props>;
  };
}

export const Tooltip = ({
  children,
  content,
  hideArrow,
  closeDelay,
  delay,
  timeout,
  side,
  sideOffset,
  align,
  alignOffset,
  slotProps,
  ...props
}: TooltipProps) => {
  return (
    <BaseTooltip.Provider
      closeDelay={closeDelay}
      delay={delay}
      timeout={timeout}
    >
      <BaseTooltip.Root {...slotProps?.root}>
        <BaseTooltip.Trigger render={children} />

        <BaseTooltip.Portal {...slotProps?.portal}>
          <BaseTooltip.Positioner
            side={side}
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset}
            {...slotProps?.positioner}
          >
            <BaseTooltip.Popup {...props}>
              {content}

              {!hideArrow && <BaseTooltip.Arrow {...slotProps?.arrow} />}
            </BaseTooltip.Popup>
          </BaseTooltip.Positioner>
        </BaseTooltip.Portal>
      </BaseTooltip.Root>
    </BaseTooltip.Provider>
  );
};

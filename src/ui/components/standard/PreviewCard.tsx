"use client";

import { BasePreviewCard } from "../base";

export interface PreviewCardProps
  extends Omit<BasePreviewCard.Popup.Props, "children" | "content"> {
  children: React.ReactElement;
  content?: React.ReactNode;
  hideArrow?: boolean;
  side?: BasePreviewCard.Positioner.Props["side"];
  sideOffset?: BasePreviewCard.Positioner.Props["sideOffset"];
  align?: BasePreviewCard.Positioner.Props["align"];
  alignOffset?: BasePreviewCard.Positioner.Props["alignOffset"];
  slotProps?: {
    root?: Omit<Partial<BasePreviewCard.Root.Props>, "children">;
    portal?: Omit<Partial<BasePreviewCard.Portal.Props>, "children">;
    positioner?: Omit<Partial<BasePreviewCard.Positioner.Props>, "children">;
    arrow?: Partial<BasePreviewCard.Arrow.Props>;
  };
}

export const PreviewCard = ({
  children,
  content,
  hideArrow,
  side,
  sideOffset,
  align,
  alignOffset,
  slotProps,
  ...props
}: PreviewCardProps) => {
  return (
    <BasePreviewCard.Root {...slotProps?.root}>
      <BasePreviewCard.Trigger render={children} />

      <BasePreviewCard.Portal {...slotProps?.portal}>
        <BasePreviewCard.Positioner
          side={side}
          sideOffset={sideOffset}
          align={align}
          alignOffset={alignOffset}
          {...slotProps?.positioner}
        >
          <BasePreviewCard.Popup {...props}>
            {content}

            {!hideArrow && <BasePreviewCard.Arrow {...slotProps?.arrow} />}
          </BasePreviewCard.Popup>
        </BasePreviewCard.Positioner>
      </BasePreviewCard.Portal>
    </BasePreviewCard.Root>
  );
};

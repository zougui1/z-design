"use client";

import { BaseScrollArea } from "../../base";

export interface ScrollAreaProps extends BaseScrollArea.Root.Props {
  /** Which scrollbars to render. Defaults to `"both"`. */
  orientation?: "vertical" | "horizontal" | "both";
  slotProps?: {
    viewport?: Partial<BaseScrollArea.Viewport.Props>;
    content?: Partial<BaseScrollArea.Content.Props>;
    verticalScrollbar?: Partial<BaseScrollArea.Scrollbar.Props>;
    horizontalScrollbar?: Partial<BaseScrollArea.Scrollbar.Props>;
    thumb?: Partial<BaseScrollArea.Thumb.Props>;
    corner?: Partial<BaseScrollArea.Corner.Props>;
    shadows?: Partial<BaseScrollArea.Shadows.Props>;
  };
}

export const ScrollArea = ({
  children,
  orientation = "both",
  slotProps,
  ...props
}: ScrollAreaProps) => {
  const showVertical = orientation !== "horizontal";
  const showHorizontal = orientation !== "vertical";

  return (
    <BaseScrollArea.Root {...props}>
      <BaseScrollArea.Viewport {...slotProps?.viewport}>
        <BaseScrollArea.Content {...slotProps?.content}>
          {children}
        </BaseScrollArea.Content>
      </BaseScrollArea.Viewport>

      {showVertical && (
        <BaseScrollArea.Scrollbar
          orientation="vertical"
          {...slotProps?.verticalScrollbar}
        >
          <BaseScrollArea.Thumb {...slotProps?.thumb} />
        </BaseScrollArea.Scrollbar>
      )}

      {showHorizontal && (
        <BaseScrollArea.Scrollbar
          orientation="horizontal"
          {...slotProps?.horizontalScrollbar}
        >
          <BaseScrollArea.Thumb {...slotProps?.thumb} />
        </BaseScrollArea.Scrollbar>
      )}

      {showVertical && showHorizontal && (
        <BaseScrollArea.Corner {...slotProps?.corner} />
      )}

      <BaseScrollArea.Shadows {...slotProps?.shadows} />
    </BaseScrollArea.Root>
  );
};

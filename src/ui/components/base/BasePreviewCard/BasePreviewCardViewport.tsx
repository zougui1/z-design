"use client";
import { cnState } from "../../../utils";
import { PrimitivePreviewCard } from "../../primitives";

export interface BasePreviewCardViewportProps
  extends PrimitivePreviewCard.Viewport.Props {}

export type BasePreviewCardViewportState =
  PrimitivePreviewCard.Viewport.State;

export const BasePreviewCardViewport = ({
  className,
  ...props
}: BasePreviewCardViewportProps) => {
  return (
    <PrimitivePreviewCard.Viewport
      data-slot="preview-card-viewport"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BasePreviewCardViewport {
  export type Props = BasePreviewCardViewportProps;
  export type State = BasePreviewCardViewportState;
}

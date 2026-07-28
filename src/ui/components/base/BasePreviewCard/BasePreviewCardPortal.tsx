"use client";
import { PrimitivePreviewCard } from "../../primitives";

export interface BasePreviewCardPortalProps
  extends PrimitivePreviewCard.Portal.Props {}

export type BasePreviewCardPortalState = PrimitivePreviewCard.Portal.State;

export const BasePreviewCardPortal = (props: BasePreviewCardPortalProps) => {
  return (
    <PrimitivePreviewCard.Portal data-slot="preview-card-portal" {...props} />
  );
};

export namespace BasePreviewCardPortal {
  export type Props = BasePreviewCardPortalProps;
  export type State = BasePreviewCardPortalState;
}

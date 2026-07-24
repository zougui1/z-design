"use client";
import { PrimitivePreviewCard } from "../../primitives";

export interface BasePreviewCardRootProps
  extends PrimitivePreviewCard.Root.Props {}

export type BasePreviewCardRootState = PrimitivePreviewCard.Root.State;

export const BasePreviewCardRoot = (props: BasePreviewCardRootProps) => {
  return <PrimitivePreviewCard.Root data-slot="preview-card-root" {...props} />;
};

export namespace BasePreviewCardRoot {
  export type Props = BasePreviewCardRootProps;
  export type State = BasePreviewCardRootState;
}

"use client";
import { PrimitivePreviewCard } from "../../primitives";

export interface BasePreviewCardTriggerProps
  extends PrimitivePreviewCard.Trigger.Props {}

export type BasePreviewCardTriggerState = PrimitivePreviewCard.Trigger.State;

export const BasePreviewCardTrigger = (props: BasePreviewCardTriggerProps) => {
  return (
    <PrimitivePreviewCard.Trigger data-slot="preview-card-trigger" {...props} />
  );
};

export namespace BasePreviewCardTrigger {
  export type Props = BasePreviewCardTriggerProps;
  export type State = BasePreviewCardTriggerState;
}

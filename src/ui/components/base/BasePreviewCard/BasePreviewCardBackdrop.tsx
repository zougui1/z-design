"use client";
import { cnState } from "../../../utils";
import { PrimitivePreviewCard } from "../../primitives";

export interface BasePreviewCardBackdropProps
  extends PrimitivePreviewCard.Backdrop.Props {}

export type BasePreviewCardBackdropState =
  PrimitivePreviewCard.Backdrop.State;

export const BasePreviewCardBackdrop = ({
  className,
  ...props
}: BasePreviewCardBackdropProps) => {
  return (
    <PrimitivePreviewCard.Backdrop
      data-slot="preview-card-backdrop"
      {...props}
      className={cnState(
        `fixed inset-0 z-40 transition-all duration-150
        data-ending-style:opacity-0 data-starting-style:opacity-0`,
        className,
      )}
    />
  );
};

export namespace BasePreviewCardBackdrop {
  export type Props = BasePreviewCardBackdropProps;
  export type State = BasePreviewCardBackdropState;
}

"use client";
import { cnState } from "../../../utils";
import { PrimitivePreviewCard } from "../../primitives";

export interface BasePreviewCardPopupProps
  extends PrimitivePreviewCard.Popup.Props {}

export type BasePreviewCardPopupState = PrimitivePreviewCard.Popup.State;

export const BasePreviewCardPopup = ({
  className,
  ...props
}: BasePreviewCardPopupProps) => {
  return (
    <PrimitivePreviewCard.Popup
      data-slot="preview-card-popup"
      {...props}
      className={cnState(
        `bg-popover text-popover-foreground ring-foreground/10
        data-[side=bottom]:slide-in-from-top-2
        data-[side=inline-end]:slide-in-from-left-2
        data-[side=inline-start]:slide-in-from-right-2
        data-[side=left]:slide-in-from-right-2
        data-[side=right]:slide-in-from-left-2
        data-[side=top]:slide-in-from-bottom-2 data-open:animate-in
        data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out
        data-closed:fade-out-0 data-closed:zoom-out-95 z-50 flex w-80 max-w-80
        origin-(--transform-origin) flex-col gap-3 rounded-lg p-4 text-sm
        shadow-md ring-1 duration-150 outline-none`,
        className,
      )}
    />
  );
};

export namespace BasePreviewCardPopup {
  export type Props = BasePreviewCardPopupProps;
  export type State = BasePreviewCardPopupState;
}

"use client";

import { cnState } from "../../../utils";
import { PrimitiveTooltip } from "../../primitives";

export interface BaseTooltipPopupProps extends PrimitiveTooltip.Popup.Props {}

export const BaseTooltipPopup = ({
  className,
  ...props
}: BaseTooltipPopupProps) => {
  return (
    <PrimitiveTooltip.Popup
      data-slot="tooltip-popup"
      {...props}
      className={cnState(
        `bg-foreground text-background data-[side=bottom]:slide-in-from-top-2
        data-[side=inline-end]:slide-in-from-left-2
        data-[side=inline-start]:slide-in-from-right-2
        data-[side=left]:slide-in-from-right-2
        data-[side=right]:slide-in-from-left-2
        data-[side=top]:slide-in-from-bottom-2
        data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0
        data-[state=delayed-open]:zoom-in-95 data-open:animate-in
        data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out
        data-closed:fade-out-0 data-closed:zoom-out-95 z-50 inline-flex w-fit
        max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-md
        px-3 py-1.5 text-xs has-data-[slot=kbd]:pr-1.5
        **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate
        **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm`,
        className,
      )}
    />
  );
};

export namespace BaseTooltipPopup {
  export type Props = BaseTooltipPopupProps;
  export type State = PrimitiveTooltip.Popup.State;
}

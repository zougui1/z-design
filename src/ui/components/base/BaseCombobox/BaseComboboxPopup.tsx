"use client";

import { cnState } from "../../../utils";
import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxPopupProps extends PrimitiveCombobox.Popup.Props {
  "data-chips"?: "true";
  extraWidth?: boolean | number;
}

export type BaseComboboxPopupState = PrimitiveCombobox.Popup.State;

export const BaseComboboxPopup = ({
  extraWidth,
  className,
  style,
  ...props
}: BaseComboboxPopupProps) => {
  const getExtraWidthStyle = () => {
    if (extraWidth === true) return "var(--spacing) * 7";
    if (extraWidth) return `${extraWidth}px`;
  };

  return (
    <PrimitiveCombobox.Popup
      data-slot="combobox-popup"
      {...props}
      style={(state) => ({
        ...{ "--combobox-extra-width": getExtraWidthStyle() },
        ...(typeof style === "function" ? style(state) : style),
      })}
      className={cnState(
        `group/combobox-popup bg-popover text-popover-foreground
        ring-foreground/10 data-[side=bottom]:slide-in-from-top-2
        data-[side=inline-end]:slide-in-from-left-2
        data-[side=inline-start]:slide-in-from-right-2
        data-[side=left]:slide-in-from-right-2
        data-[side=right]:slide-in-from-left-2
        data-[side=top]:slide-in-from-bottom-2
        *:data-[slot=input-group-root]:border-input/30
        *:data-[slot=input-group-root]:bg-input/30 data-open:animate-in
        data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out
        data-closed:fade-out-0 data-closed:zoom-out-95 relative
        max-h-(--available-height) w-(--anchor-width) max-w-(--available-width)
        min-w-[calc(var(--anchor-width)+var(--combobox-extra-width))]
        origin-(--transform-origin) overflow-hidden rounded-lg shadow-md ring-1
        duration-100 data-chips:min-w-(--anchor-width)
        *:data-[slot=input-group-root]:m-1 *:data-[slot=input-group-root]:mb-0
        *:data-[slot=input-group-root]:h-8
        *:data-[slot=input-group-root]:shadow-none`,
        className,
      )}
    />
  );
};

export namespace BaseComboboxPopup {
  export type Props = BaseComboboxPopupProps;
  export type State = BaseComboboxPopupState;
}

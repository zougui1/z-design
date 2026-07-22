"use client";
import { cnState } from "../../../utils";
import { PrimitiveAutocomplete } from "../../primitives";

export interface BaseAutocompletePopupProps
  extends PrimitiveAutocomplete.Popup.Props {}

export type BaseAutocompletePopupState = PrimitiveAutocomplete.Popup.State;

export const BaseAutocompletePopup = ({
  className,
  ...props
}: BaseAutocompletePopupProps) => {
  return (
    <PrimitiveAutocomplete.Popup
      data-slot="autocomplete-popup"
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
        data-closed:fade-out-0 data-closed:zoom-out-95 relative
        max-h-(--available-height) w-(--anchor-width)
        max-w-(--available-width) origin-(--transform-origin) overflow-hidden
        rounded-lg shadow-md ring-1 duration-100`,
        className,
      )}
    />
  );
};

export namespace BaseAutocompletePopup {
  export type Props = BaseAutocompletePopupProps;
  export type State = BaseAutocompletePopupState;
}

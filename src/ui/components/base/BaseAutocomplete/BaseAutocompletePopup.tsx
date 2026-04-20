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
        `bg-background max-h-92 w-(--anchor-width) max-w-(--available-width)
        rounded-md shadow-lg`,
        className,
      )}
    />
  );
};

export namespace BaseAutocompletePopup {
  export type Props = BaseAutocompletePopupProps;
  export type State = BaseAutocompletePopupState;
}

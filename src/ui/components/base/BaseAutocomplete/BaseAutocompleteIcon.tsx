"use client";
import { cnState } from "../../../utils";
import { PrimitiveAutocomplete } from "../../primitives";

export interface BaseAutocompleteIconProps extends PrimitiveAutocomplete.Icon.Props {}

export type BaseAutocompleteIconState = PrimitiveAutocomplete.Icon.State;

export const BaseAutocompleteIcon = ({
  className,
  ...props
}: BaseAutocompleteIconProps) => {
  return (
    <PrimitiveAutocomplete.Icon
      data-slot="autocomplete-icon"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseAutocompleteIcon {
  export type Props = BaseAutocompleteIconProps;
  export type State = BaseAutocompleteIconState;
}

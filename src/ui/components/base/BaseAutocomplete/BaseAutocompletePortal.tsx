"use client";
import { cnState } from "../../../utils";
import { PrimitiveAutocomplete } from "../../primitives";

export interface BaseAutocompletePortalProps extends PrimitiveAutocomplete.Portal.Props {}

export type BaseAutocompletePortalState = PrimitiveAutocomplete.Portal.State;

export const BaseAutocompletePortal = ({
  className,
  ...props
}: BaseAutocompletePortalProps) => {
  return (
    <PrimitiveAutocomplete.Portal
      data-slot="autocomplete-portal"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseAutocompletePortal {
  export type Props = BaseAutocompletePortalProps;
  export type State = BaseAutocompletePortalState;
}

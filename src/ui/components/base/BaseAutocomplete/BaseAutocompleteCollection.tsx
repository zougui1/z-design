"use client";
import { cnState } from "../../../utils";
import { PrimitiveAutocomplete } from "../../primitives";

export interface BaseAutocompleteCollectionProps extends PrimitiveAutocomplete.Collection.Props {}

export type BaseAutocompleteCollectionState = PrimitiveAutocomplete.Collection.State;

export const BaseAutocompleteCollection = ({
  className,
  ...props
}: BaseAutocompleteCollectionProps) => {
  return (
    <PrimitiveAutocomplete.Collection
      data-slot="autocomplete-collection"
      {...props}
      className={cnState("", className)}
    />
  );
};

export namespace BaseAutocompleteCollection {
  export type Props = BaseAutocompleteCollectionProps;
  export type State = BaseAutocompleteCollectionState;
}

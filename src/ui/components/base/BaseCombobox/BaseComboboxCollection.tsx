"use client";

import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxCollectionProps
  extends PrimitiveCombobox.Collection.Props {}

export type BaseComboboxCollectionState = PrimitiveCombobox.Collection.State;

export const BaseComboboxCollection = (props: BaseComboboxCollectionProps) => {
  return (
    <PrimitiveCombobox.Collection data-slot="combobox-collection" {...props} />
  );
};

export namespace BaseComboboxCollection {
  export type Props = BaseComboboxCollectionProps;
  export type State = BaseComboboxCollectionState;
}

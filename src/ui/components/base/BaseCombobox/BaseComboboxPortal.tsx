"use client";

import { PrimitiveCombobox } from "../../primitives";

export interface BaseComboboxPortalProps
  extends PrimitiveCombobox.Portal.Props {}

export type BaseComboboxPortalState = PrimitiveCombobox.Portal.State;

export const BaseComboboxPortal = (props: BaseComboboxPortalProps) => {
  return <PrimitiveCombobox.Portal data-slot="combobox-portal" {...props} />;
};

export namespace BaseComboboxPortal {
  export type Props = BaseComboboxPortalProps;
  export type State = BaseComboboxPortalState;
}

"use client";

import { PrimitiveContextMenu } from "../../primitives";

export interface BaseContextMenuRadioGroupProps
  extends PrimitiveContextMenu.RadioGroup.Props {}

export type BaseContextMenuRadioGroupState = PrimitiveContextMenu.RadioGroup.State;

export const BaseContextMenuRadioGroup = (props: BaseContextMenuRadioGroupProps) => {
  return <PrimitiveContextMenu.RadioGroup data-slot="context-menu-radio-group" {...props} />;
};

export namespace BaseContextMenuRadioGroup {
  export type Props = BaseContextMenuRadioGroupProps;
  export type State = BaseContextMenuRadioGroupState;
}

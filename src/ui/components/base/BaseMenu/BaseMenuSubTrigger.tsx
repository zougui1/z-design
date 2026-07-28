"use client";

import { cnState } from "../../../utils";
import { PrimitiveMenu } from "../../primitives";

export interface BaseMenuSubTriggerProps
  extends PrimitiveMenu.SubmenuTrigger.Props {
  inset?: boolean;
}

export type BaseMenuSubTriggerState = PrimitiveMenu.SubmenuTrigger.State;

export const BaseMenuSubTrigger = ({
  className,
  inset,
  ...props
}: BaseMenuSubTriggerProps) => {
  return (
    <PrimitiveMenu.SubmenuTrigger
      data-slot="menu-sub-trigger"
      data-inset={inset ? "true" : undefined}
      {...props}
      className={cnState(
        `focus:bg-accent focus:text-accent-foreground
        not-data-[variant=destructive]:focus:**:text-accent-foreground
        data-popup-open:bg-accent data-popup-open:text-accent-foreground
        data-open:bg-accent data-open:text-accent-foreground flex cursor-default
        items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden
        select-none data-inset:pl-7 [&_svg]:pointer-events-none [&_svg]:shrink-0
        [&_svg:not([class*='size-'])]:size-4`,
        className,
      )}
    />
  );
};

export namespace BaseMenuSubTrigger {
  export type Props = BaseMenuSubTriggerProps;
  export type State = BaseMenuSubTriggerState;
}

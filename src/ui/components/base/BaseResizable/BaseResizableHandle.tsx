"use client";

import { cn } from "../../../utils";
import {
  PrimitiveResizableSeparator,
  type PrimitiveResizableSeparatorProps,
} from "../../primitives";

export interface BaseResizableHandleProps
  extends PrimitiveResizableSeparatorProps {}

export const BaseResizableHandle = ({
  className,
  ...props
}: BaseResizableHandleProps) => {
  return (
    <PrimitiveResizableSeparator
      data-slot="resizable-handle"
      className={cn(
        `bg-border focus-visible:ring-ring relative flex shrink-0 items-center
        justify-center self-stretch outline-none transition-colors
        hover:bg-primary/40 focus-visible:ring-2 data-disabled:pointer-events-none
        after:absolute after:z-10
        aria-[orientation=vertical]:w-px
        aria-[orientation=vertical]:after:inset-y-0
        aria-[orientation=vertical]:after:-inset-x-1
        aria-[orientation=horizontal]:h-px
        aria-[orientation=horizontal]:after:inset-x-0
        aria-[orientation=horizontal]:after:-inset-y-1`,
        className,
      )}
      {...props}
    />
  );
};

export namespace BaseResizableHandle {
  export type Props = BaseResizableHandleProps;
}

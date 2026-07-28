"use client";

import { cn } from "../../../utils";
import {
  PrimitiveResizablePanel,
  type PrimitiveResizablePanelProps,
} from "../../primitives";

export interface BaseResizablePanelProps
  extends PrimitiveResizablePanelProps {}

export const BaseResizablePanel = ({
  className,
  ...props
}: BaseResizablePanelProps) => {
  return (
    <PrimitiveResizablePanel
      data-slot="resizable-panel"
      // `className` is applied to the library's inner content div; make it
      // fill the panel so nested groups / `h-full` content resolve correctly.
      className={cn("h-full", className)}
      {...props}
    />
  );
};

export namespace BaseResizablePanel {
  export type Props = BaseResizablePanelProps;
}

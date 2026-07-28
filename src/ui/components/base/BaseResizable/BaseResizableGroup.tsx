"use client";

import { cn } from "../../../utils";
import {
  PrimitiveResizableGroup,
  type PrimitiveResizableGroupProps,
} from "../../primitives";

export interface BaseResizableGroupProps
  extends PrimitiveResizableGroupProps {}

export const BaseResizableGroup = ({
  className,
  ...props
}: BaseResizableGroupProps) => {
  // react-resizable-panels forces `height:100%;width:100%` inline on the group,
  // so sizing/border classes must live on a wrapper that the group fills.
  // The wrapper defaults to filling its parent, so nested groups work too.
  return (
    <div
      data-slot="resizable-group"
      className={cn("relative h-full w-full overflow-hidden", className)}
    >
      <PrimitiveResizableGroup {...props} />
    </div>
  );
};

export namespace BaseResizableGroup {
  export type Props = BaseResizableGroupProps;
}

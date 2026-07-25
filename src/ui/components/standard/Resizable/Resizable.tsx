"use client";

import { GripVerticalIcon } from "lucide-react";

import { cn } from "~/ui/utils";

import { BaseResizable } from "../../base";

export type ResizableProps = BaseResizable.Group.Props;
export const Resizable = BaseResizable.Group;

export type ResizablePanelProps = BaseResizable.Panel.Props;
export const ResizablePanel = BaseResizable.Panel;

export interface ResizableHandleProps extends BaseResizable.Handle.Props {
  /** Render a visible grip in the middle of the handle. */
  withHandle?: boolean;
}

export const ResizableHandle = ({
  withHandle,
  className,
  children,
  ...props
}: ResizableHandleProps) => {
  return (
    <BaseResizable.Handle className={cn("group/handle", className)} {...props}>
      {withHandle && (
        <div
          className="bg-border z-20 flex h-4 w-3 items-center justify-center
            rounded-xs border group-aria-[orientation=horizontal]/handle:h-3
            group-aria-[orientation=horizontal]/handle:w-4"
        >
          <GripVerticalIcon
            className="size-2.5 group-aria-[orientation=horizontal]/handle:rotate-90"
          />
        </div>
      )}
      {children}
    </BaseResizable.Handle>
  );
};

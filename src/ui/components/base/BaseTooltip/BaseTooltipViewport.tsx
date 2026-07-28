"use client";

import { cn } from "~/ui/utils";

import { PrimitiveTooltip } from "../../primitives";

export interface BaseTooltipViewportProps
  extends PrimitiveTooltip.Viewport.Props {}

export const BaseTooltipViewport = ({
  className,
  ...props
}: BaseTooltipViewportProps) => {
  return (
    <PrimitiveTooltip.Viewport
      data-slot="tooltip-viewport"
      className={cn(
        "relative size-full overflow-clip",
        "[--viewport-inline-padding:0.5rem]",
        `[&_data-previous]:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding))]
        [&_data-previous]:translate-0 [&_data-previous]:opacity-100
        [&_data-previous]:transition-[opacity,translate]`,
        `[&_data-current]:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding))]
        [&_data-current]:translate-0 [&_data-current]:opacity-100
        [&_data-current]:transition-[opacity,translate]`,
        "[data-[activation-direction=left]_[data-current][data-starting-style]]:-translate-x-1/2",
        "[data-[activation-direction=left]_[data-current][data-ending-style]]:-translate-x-1/2",
        "[data-[activation-direction=right]_[data-current][data-starting-style]]:translate-x-1/2",
        "[data-[activation-direction=right]_[data-current][data-ending-style]]:translate-x-1/2",
        "[&_[data-current][data-starting-style]]:opacity-0",
        "[&_[data-current][data-ending-style]]:opacity-0",
        className,
      )}
      {...props}
    />
  );
};

export namespace BaseTooltipViewport {
  export type Props = BaseTooltipViewportProps;
  export type State = PrimitiveTooltip.Trigger.State;
}

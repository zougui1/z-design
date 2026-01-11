"use client";

import { Button, Tooltip } from "~/ui/components";

const animationDemo = Tooltip.createHandle<string>();

export function AnimatedTooltip() {
  return (
    <Tooltip.Provider>
      <div className="flex gap-2">
        <Tooltip.Trigger
          handle={animationDemo}
          payload="This is information about the feature"
          render={<Button />}
        >
          1
        </Tooltip.Trigger>

        <Tooltip.Trigger
          handle={animationDemo}
          payload="Need help?"
          render={<Button />}
        >
          2
        </Tooltip.Trigger>

        <Tooltip.Trigger
          handle={animationDemo}
          payload="arning: This action cannot be undone"
          render={<Button />}
        >
          3
        </Tooltip.Trigger>
      </div>

      <Tooltip.Root handle={animationDemo}>
        {({ payload }) => (
          <Tooltip.Portal>
            <Tooltip.Positioner>
              <Tooltip.Popup>
                <Tooltip.Arrow />

                <Tooltip.Viewport>
                  {console.log(payload)}
                  {payload !== undefined && <span>{String(payload)}</span>}
                </Tooltip.Viewport>
              </Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Portal>
        )}
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

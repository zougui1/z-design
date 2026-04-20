"use client";

import { type BaseUIEvent, mergeProps, useRender } from "@base-ui/react";

import { type CopyState, useCopyContext } from "./context";

export interface PrimitiveCopyTriggerProps extends Omit<
  useRender.ComponentProps<"button", CopyState>,
  "onCopy"
> {
  onCopy?: (
    event: BaseUIEvent<React.MouseEvent<HTMLButtonElement, MouseEvent>>,
  ) => void;
  onCopyError?: (
    event: BaseUIEvent<React.MouseEvent<HTMLButtonElement, MouseEvent>>,
    error: unknown,
  ) => void;
}

export const PrimitiveCopyTrigger = ({
  render,
  onClick,
  onCopy,
  onCopyError,
  ...props
}: PrimitiveCopyTriggerProps) => {
  const context = useCopyContext();

  return useRender({
    defaultTagName: "button",
    render,
    props: mergeProps<"button">(
      {
        onClick: (event) => {
          onClick?.(event);

          if (!event.baseUIHandlerPrevented) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            (async () => {
              const [success, error] = await context.copy();

              if (success) onCopy?.(event);
              if (error) onCopyError?.(event, error);
            })();
          }
        },
      },
      props,
    ),
    state: context.state,
  });
};

export namespace PrimitiveCopyTrigger {
  export type Props = PrimitiveCopyTriggerProps;
  export type State = CopyState;
}

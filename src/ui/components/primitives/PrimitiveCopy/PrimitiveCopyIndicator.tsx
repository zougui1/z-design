"use client";

import { useRender } from "@base-ui/react";
import { useEffect, useRef } from "react";

import { type CopyState, type CopyStatus, useCopyContext } from "./context";

export interface PrimitiveCopyIndicatorProps extends useRender.ComponentProps<"div"> {
  match: CopyStatus;
  duration?: number;
}

export const PrimitiveCopyIndicator = ({
  render,
  match,
  duration = 3000,
  ...props
}: PrimitiveCopyIndicatorProps) => {
  const { status, reset, state } = useCopyContext();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const element = useRender({
    defaultTagName: "div",
    render,
    props,
    state,
  });

  const isActive = status === match;

  useEffect(() => {
    if (isActive) {
      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        reset();
      }, duration);
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, reset]);

  if (!isActive) {
    return null;
  }

  return element;
};

export namespace PrimitiveCopyIndicator {
  export type Props = PrimitiveCopyIndicatorProps;
  export type State = CopyState;
}

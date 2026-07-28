"use client";

import { useCopyContext } from "./context";

export interface PrimitiveCopyContentProps {
  children?: React.ReactNode;
}

export const PrimitiveCopyContent = ({
  children,
}: PrimitiveCopyContentProps) => {
  const context = useCopyContext();

  if (context.status !== "idle") {
    return null;
  }

  return children;
};

export namespace PrimitiveCopyContent {
  export type Props = PrimitiveCopyContentProps;
}

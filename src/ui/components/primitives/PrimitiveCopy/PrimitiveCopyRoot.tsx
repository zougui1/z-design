"use client";

import { useCallback, useMemo, useRef, useState } from "react";

import { copyToClipboard } from "../../../utils";
import { CopyContext, type CopyStatus } from "./context";

export interface PrimitiveCopyRootProps {
  content?: string | (() => string | undefined);
  children?: React.ReactNode;
}

export const PrimitiveCopyRoot = ({
  content,
  ...props
}: PrimitiveCopyRootProps) => {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const contentRef = useRef(content);
  contentRef.current = content;

  const copy = useCallback(async (): Promise<
    [success: boolean, error?: unknown]
  > => {
    const content =
      typeof contentRef.current === "function"
        ? contentRef.current()
        : contentRef.current;

    if (content) {
      const [success, error] = await copyToClipboard(content);
      setStatus(success ? "copied" : "error");
      return [success, error];
    }

    return [false];
  }, []);

  const reset = useCallback(() => {
    setStatus("idle");
  }, []);

  const context = useMemo(() => {
    return {
      copy,
      reset,
      status,
      state: {
        idle: status === "idle",
        copied: status === "copied",
        error: status === "error",
      },
    };
  }, [status, copy, reset]);

  console.log("status", context.status);

  return <CopyContext.Provider {...props} value={context} />;
};

export namespace PrimitiveCopyRoot {
  export type Props = PrimitiveCopyRootProps;
}

"use client";

import { createContext, useContext } from "react";

export type CopyStatus = "idle" | "copied" | "error";

export type CopyState = {
  idle: boolean;
  copied: boolean;
  error: boolean;
};

export interface CopyContextValue {
  copy: () => Promise<[success: boolean, error?: unknown]>;
  reset: () => void;
  status: CopyStatus;
  state: CopyState;
}

export const CopyContext = createContext<CopyContextValue | undefined>(
  undefined,
);

export const useCopyContext = () => {
  const context = useContext(CopyContext);

  if (!context) {
    throw new Error("Cannot use CopyContext outside of Copy.Root");
  }

  return context;
};

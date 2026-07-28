"use client";

import { createContext, useContext } from "react";

export interface BaseSidebarContextValue {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
}

export const BaseSidebarContext = createContext<BaseSidebarContextValue | null>(null);

export const useSidebar = () => {
  const context = useContext(BaseSidebarContext);

  if (!context) {
    throw new Error("useSidebar must be used within a BaseSidebarProvider.");
  }

  return context;
};

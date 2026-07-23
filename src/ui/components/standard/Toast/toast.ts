"use client";

import { BaseToast } from "../../base";

/**
 * Shared toast manager. Because it's created outside React and passed to the
 * `<Toaster />` provider, its methods (`toast.success(...)`, etc.) can be called
 * from anywhere — event handlers, module scope, non-React code.
 */
export const toast = BaseToast.createManager();

/** Hook access to the same manager from inside components. */
export const useToast = BaseToast.useManager;

export type ToastManager = BaseToast.Manager;
export type ToastOptions<Data extends object = object> =
  BaseToast.ManagerAddOptions<Data>;

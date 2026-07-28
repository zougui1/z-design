"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";

export interface BaseSelectRootProps<
  Value,
  Multiple extends boolean | undefined = false,
> extends SelectPrimitive.Root.Props<Value, Multiple> {}

export type BaseSelectRootActions = SelectPrimitive.Root.Actions;
export type BaseSelectRootChangeEventDetails =
  SelectPrimitive.Root.ChangeEventDetails;
export type BaseSelectRootChangeEventReason =
  SelectPrimitive.Root.ChangeEventReason;
export type BaseSelectRootState = SelectPrimitive.Root.State;

export const BaseSelectRoot = SelectPrimitive.Root;

"use client";

import { Clock } from "lucide-react";
import { useState } from "react";

import { Input, type InputProps } from "../Input";

const pad = (value: number) => String(value).padStart(2, "0");

/** `Date` → `HH:mm` (or `HH:mm:ss`) for a native time input. */
export const dateToTimeValue = (date: Date, withSeconds?: boolean) => {
  const base = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
  return withSeconds ? `${base}:${pad(date.getSeconds())}` : base;
};

/** Merge a `HH:mm(:ss)` string into `date`, returning a new `Date`. */
export const applyTimeValue = (date: Date, time: string) => {
  const [hours, minutes, seconds] = time.split(":").map(Number);
  const next = new Date(date);
  next.setHours(hours ?? 0, minutes ?? 0, seconds ?? 0, 0);
  return next;
};

export interface TimeInputProps
  extends
    Omit<
      InputProps,
      "type" | "value" | "defaultValue" | "onChange" | "onValueChange"
    > {
  /** The selected time, carried on a `Date`. Only the time of day is used. */
  value?: Date;
  defaultValue?: Date;
  onValueChange?: (date: Date | undefined) => void;
  /** Allow selecting seconds (sets the native input `step` to 1 second). */
  withSeconds?: boolean;
}

export const TimeInput = ({
  value: valueProp,
  defaultValue,
  onValueChange,
  withSeconds,
  step,
  startAddon,
  ...props
}: TimeInputProps) => {
  // controlled when a change handler is provided; otherwise keep it internally
  const isControlled = onValueChange !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const value = isControlled ? valueProp : internalValue;

  const handleChange: NonNullable<InputProps["onChange"]> = (event) => {
    const time = event.currentTarget.value;
    // preserve the existing calendar day; fall back to today when unset
    const next = time ? applyTimeValue(value ?? new Date(), time) : undefined;
    if (!isControlled) setInternalValue(next);
    onValueChange?.(next);
  };

  return (
    <Input
      type="time"
      startAddon={startAddon === undefined ? <Clock /> : startAddon}
      step={step ?? (withSeconds ? 1 : undefined)}
      value={value ? dateToTimeValue(value, withSeconds) : ""}
      onChange={handleChange}
      {...props}
    />
  );
};

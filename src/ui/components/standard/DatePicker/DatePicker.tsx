"use client";

import { CalendarIcon } from "lucide-react";
import { useState } from "react";

import { cn } from "~/ui/utils";

import {
  BaseCalendar,
  type BaseCalendarProps,
  BaseDatePicker,
  BaseField,
} from "../../base";
import { TimeInput, type TimeInputProps } from "../TimeInput";

export interface DatePickerProps
  extends Pick<BaseField.Root.Props, "dirty" | "touched" | "invalid"> {
  value?: Date;
  defaultValue?: Date;
  onValueChange?: (date: Date | undefined) => void;
  disabled?: boolean;
  name?: string;

  label?: React.ReactNode;
  errors?: { message?: string }[];
  description?: React.ReactNode;
  placeholder?: React.ReactNode;

  /**
   * Renders a time input inside the popup so the selected value carries a time
   * of day. The formatted trigger label switches to include the time as well.
   */
  withTime?: boolean;
  /** Granularity of the time input when {@link withTime} is enabled. */
  timeStep?: "minutes" | "seconds";

  /** `Intl.DateTimeFormat` options used to format the selected date. */
  format?: Intl.DateTimeFormatOptions;
  locale?: Intl.LocalesArgument;
  /** Days to disable, forwarded to the underlying calendar. */
  disabledDates?: Extract<BaseCalendarProps, { mode?: "single" }>["disabled"];

  open?: boolean;
  onOpenChange?: (open: boolean) => void;

  slotProps?: {
    root?: Partial<
      Omit<BaseField.Root.Props, "children" | "dirty" | "touched" | "invalid">
    >;
    label?: Partial<Omit<BaseField.Label.Props, "children">>;
    error?: Partial<Omit<BaseField.Error.Props, "error">>;
    description?: Partial<Omit<BaseField.Description.Props, "children">>;
    control?: Partial<BaseField.Control.Props>;
    trigger?: React.ComponentProps<"button">;
    positioner?: Partial<BaseDatePicker.Positioner.Props>;
    popup?: Partial<BaseDatePicker.Popup.Props>;
    calendar?: Partial<BaseCalendarProps>;
    timeInput?: Partial<TimeInputProps>;
  };
}

const DEFAULT_FORMAT: Intl.DateTimeFormatOptions = { dateStyle: "medium" };
const DEFAULT_FORMAT_WITH_TIME: Intl.DateTimeFormatOptions = {
  dateStyle: "medium",
  timeStyle: "short",
};

/** Copy the time of day from `from` onto the calendar day of `to`. */
const withTimeOf = (to: Date, from: Date | undefined) => {
  if (!from) return to;
  const next = new Date(to);
  next.setHours(
    from.getHours(),
    from.getMinutes(),
    from.getSeconds(),
    from.getMilliseconds(),
  );
  return next;
};

// mirrors BaseInput: same surface, border, focus + invalid rings, height and
// rounding. `data-popup-open` (set while the calendar is open) reuses the focus
// treatment so an open picker reads like a focused input.
const triggerClassName =
  `border-border bg-background-light focus-visible:border-primary
  focus-visible:ring-primary/50 data-[popup-open]:border-primary
  data-[popup-open]:ring-primary/50 data-[invalid]:border-destructive
  data-[invalid]:ring-destructive/20
  focus-visible:data-[invalid]:ring-destructive/50
  data-[popup-open]:data-[invalid]:ring-destructive/50
  disabled:bg-background-light/50 flex h-9 w-full min-w-0 cursor-pointer
  items-center gap-2 rounded-sm border px-2.5 py-1 text-left text-base
  shadow-sm transition-colors outline-none focus-visible:ring-3
  data-[popup-open]:ring-3 data-[invalid]:ring-3 disabled:pointer-events-none
  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`;

export const DatePicker = ({
  value: valueProp,
  defaultValue,
  onValueChange,
  disabled,
  name,
  label,
  errors,
  description,
  placeholder = "Pick a date",
  withTime = false,
  timeStep = "minutes",
  format,
  locale,
  disabledDates,
  open: openProp,
  onOpenChange,
  dirty,
  touched,
  invalid,
  slotProps,
}: DatePickerProps) => {
  const isInvalid = invalid || !!errors?.length;

  // controlled when a change handler is provided (works for both TanStack form
  // fields and manual control); otherwise keep the value internally
  const isControlled = onValueChange !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const value = isControlled ? valueProp : internalValue;

  const isOpenControlled = openProp !== undefined;
  const [internalOpen, setInternalOpen] = useState(false);
  const open = isOpenControlled ? openProp : internalOpen;

  const setOpen = (next: boolean) => {
    if (!isOpenControlled) setInternalOpen(next);
    onOpenChange?.(next);
  };

  const commit = (date: Date | undefined) => {
    if (!isControlled) setInternalValue(date);
    onValueChange?.(date);
  };

  const handleSelect = (date: Date | undefined) => {
    // keep the previously chosen time of day when only the calendar day changes
    commit(withTime && date ? withTimeOf(date, value) : date);
    // leave the popup open when a time still needs to be picked
    if (!withTime) setOpen(false);
  };

  const resolvedFormat =
    format ?? (withTime ? DEFAULT_FORMAT_WITH_TIME : DEFAULT_FORMAT);

  const formatted = value
    ? new Intl.DateTimeFormat(locale, resolvedFormat).format(value)
    : null;

  return (
    <BaseField.Root
      {...slotProps?.root}
      disabled={disabled}
      dirty={dirty}
      touched={touched}
      invalid={isInvalid}
    >
      {label && (
        <BaseField.Label {...slotProps?.label}>{label}</BaseField.Label>
      )}

      <BaseDatePicker.Root open={open} onOpenChange={setOpen}>
        <BaseField.Control
          {...slotProps?.control}
          render={
            <BaseDatePicker.Trigger
              render={
                <button
                  type="button"
                  disabled={disabled}
                  data-invalid={isInvalid || undefined}
                  {...slotProps?.trigger}
                  className={cn(triggerClassName, slotProps?.trigger?.className)}
                >
                  <CalendarIcon className="text-muted-foreground size-4 shrink-0" />
                  <span
                    className={cn(
                      "flex-1 truncate",
                      !value && "text-muted-foreground",
                    )}
                  >
                    {formatted ?? placeholder}
                  </span>
                </button>
              }
            />
          }
        />

        <BaseDatePicker.Portal>
          <BaseDatePicker.Positioner {...slotProps?.positioner}>
            <BaseDatePicker.Popup {...slotProps?.popup}>
              <BaseCalendar
                autoFocus
                {...slotProps?.calendar}
                mode="single"
                selected={value}
                onSelect={handleSelect}
                disabled={disabledDates}
              />

              {withTime && (
                <div className="border-border border-t p-3">
                  <TimeInput
                    withSeconds={timeStep === "seconds"}
                    disabled={disabled}
                    value={value}
                    onValueChange={commit}
                    {...slotProps?.timeInput}
                  />
                </div>
              )}
            </BaseDatePicker.Popup>
          </BaseDatePicker.Positioner>
        </BaseDatePicker.Portal>
      </BaseDatePicker.Root>

      {name && (
        <input
          type="hidden"
          name={name}
          value={value ? value.toISOString() : ""}
        />
      )}

      <BaseField.Error errors={errors} {...slotProps?.error} />

      {description && (
        <BaseField.Description {...slotProps?.description}>
          {description}
        </BaseField.Description>
      )}
    </BaseField.Root>
  );
};

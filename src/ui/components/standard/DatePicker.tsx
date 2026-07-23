"use client";

import { CalendarIcon } from "lucide-react";
import { useState } from "react";

import { cn } from "~/ui/utils";

import {
  BaseCalendar,
  type BaseCalendarProps,
  BaseDatePicker,
  BaseField,
} from "../base";
import { Button, type ButtonProps } from "./Button";

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
    trigger?: Partial<ButtonProps>;
    positioner?: Partial<BaseDatePicker.Positioner.Props>;
    popup?: Partial<BaseDatePicker.Popup.Props>;
    calendar?: Partial<BaseCalendarProps>;
  };
}

const DEFAULT_FORMAT: Intl.DateTimeFormatOptions = { dateStyle: "medium" };

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
  format = DEFAULT_FORMAT,
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

  const handleSelect = (date: Date | undefined) => {
    if (!isControlled) setInternalValue(date);
    onValueChange?.(date);
    setOpen(false);
  };

  const formatted = value
    ? new Intl.DateTimeFormat(locale, format).format(value)
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
                <Button
                  variant="outline"
                  color="neutral"
                  disabled={disabled}
                  aria-invalid={isInvalid || undefined}
                  {...slotProps?.trigger}
                  className={cn(
                    "w-full justify-start gap-2 font-normal",
                    !value && "text-muted-foreground",
                    slotProps?.trigger?.className,
                  )}
                >
                  <CalendarIcon data-icon="inline-start" className="size-4" />
                  {formatted ?? placeholder}
                </Button>
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

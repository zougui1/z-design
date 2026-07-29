"use client";

import { CalendarIcon, XIcon } from "lucide-react";
import { useState } from "react";

import { cn } from "~/ui/utils";

import {
  BaseCalendar,
  type BaseCalendarDateRange,
  type BaseCalendarProps,
  BaseDatePicker,
  BaseField,
} from "../../base";
import { Button } from "../Button";

export type DateRange = BaseCalendarDateRange;

export interface DateRangePickerProps extends Pick<
  BaseField.Root.Props,
  "dirty" | "touched" | "invalid"
> {
  value?: DateRange;
  defaultValue?: DateRange;
  onValueChange?: (range: DateRange | undefined) => void;
  disabled?: boolean;
  name?: string;

  label?: React.ReactNode;
  errors?: { message?: string }[];
  description?: React.ReactNode;
  placeholder?: React.ReactNode;

  /**
   * Renders a "Clear" button inside the popup that resets the value to
   * `undefined`. The button only appears while a range is selected.
   */
  clearable?: boolean;

  /** Number of months rendered side by side in the popup. Defaults to `1`. */
  numberOfMonths?: number;

  /** `Intl.DateTimeFormat` options used to format each endpoint. */
  format?: Intl.DateTimeFormatOptions;
  locale?: Intl.LocalesArgument;
  /** Separator rendered between the two formatted endpoints. */
  separator?: React.ReactNode;
  /** Days to disable, forwarded to the underlying calendar. */
  disabledDates?: Extract<BaseCalendarProps, { mode?: "range" }>["disabled"];

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
    clearButton?: Partial<React.ComponentProps<typeof Button>>;
  };
}

const DEFAULT_FORMAT: Intl.DateTimeFormatOptions = { dateStyle: "medium" };

// mirrors DatePicker's trigger so both controls read as the same input surface.
const triggerClassName = `border-border bg-background-light focus-visible:border-primary
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

export const DateRangePicker = ({
  value: valueProp,
  defaultValue,
  onValueChange,
  disabled,
  name,
  label,
  errors,
  description,
  placeholder = "Pick a date range",
  clearable = false,
  numberOfMonths = 1,
  format,
  locale,
  separator = "–",
  disabledDates,
  open: openProp,
  onOpenChange,
  dirty,
  touched,
  invalid,
  slotProps,
}: DateRangePickerProps) => {
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

  const commit = (range: DateRange | undefined) => {
    if (!isControlled) setInternalValue(range);
    onValueChange?.(range);
  };

  const handleSelect = (range: DateRange | undefined) => {
    // keep the popup open while picking; it closes on outside click / Escape
    commit(range);
  };

  const handleClear = () => {
    commit(undefined);
    setOpen(false);
  };

  const showClear = clearable && value?.from !== undefined;

  const resolvedFormat = format ?? DEFAULT_FORMAT;
  const formatter = new Intl.DateTimeFormat(locale, resolvedFormat);

  const formatted = value?.from ? (
    <>
      {formatter.format(value.from)}
      {value.to && (
        <>
          <span className="text-muted-foreground px-1">{separator}</span>
          {formatter.format(value.to)}
        </>
      )}
    </>
  ) : null;

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
                  className={cn(
                    triggerClassName,
                    slotProps?.trigger?.className,
                  )}
                >
                  <CalendarIcon
                    className="text-muted-foreground size-4 shrink-0"
                  />
                  <span
                    className={cn(
                      "flex-1 truncate",
                      !value?.from && "text-muted-foreground",
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
                numberOfMonths={numberOfMonths}
                {...slotProps?.calendar}
                mode="range"
                selected={value}
                onSelect={handleSelect}
                disabled={disabledDates}
              />

              {showClear && (
                <div className="border-border flex justify-end border-t p-2">
                  <Button
                    variant="ghost"
                    color="neutral"
                    size="sm"
                    onClick={handleClear}
                    {...slotProps?.clearButton}
                  >
                    <XIcon />
                    Clear
                  </Button>
                </div>
              )}
            </BaseDatePicker.Popup>
          </BaseDatePicker.Positioner>
        </BaseDatePicker.Portal>
      </BaseDatePicker.Root>

      {name && (
        <>
          <input
            type="hidden"
            name={`${name}.from`}
            value={value?.from ? value.from.toISOString() : ""}
          />
          <input
            type="hidden"
            name={`${name}.to`}
            value={value?.to ? value.to.toISOString() : ""}
          />
        </>
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

"use client";

import { useEffect, useState } from "react";

import {
  type DateInput,
  type FormatRelativeTimeOptions,
  type RelativeTimeUnit,
  formatDateTime,
  resolveRelativeTime,
  toDate,
} from "~/ui/utils";

export interface RelativeTimeProps
  extends Omit<FormatRelativeTimeOptions, "now">,
    Omit<React.ComponentProps<"time">, "children" | "dateTime" | "title"> {
  /** The date to render relative to now. */
  value: DateInput;
  /**
   * Keep the label in sync with the passing of time. When enabled the component
   * re-renders on an interval derived from the smallest rendered unit. Defaults
   * to `true`.
   */
  live?: boolean;
  /**
   * Tooltip shown on hover. Defaults to the absolute date/time; pass `null` to
   * omit it or a string to override.
   */
  title?: string | null;
}

// how often to refresh, keyed by the smallest unit currently rendered
const REFRESH_MS: Record<RelativeTimeUnit, number> = {
  second: 1_000,
  minute: 10_000,
  hour: 60_000,
  day: 3_600_000,
  month: 86_400_000,
  year: 86_400_000,
};

export const RelativeTime = ({
  value,
  live = true,
  title,
  minUnit,
  maxUnit,
  maxUnits,
  locale,
  justNow,
  ...props
}: RelativeTimeProps) => {
  // bump on each tick to recompute against the current time
  const [, setTick] = useState(0);

  const options: FormatRelativeTimeOptions = {
    minUnit,
    maxUnit,
    maxUnits,
    locale,
    justNow,
  };

  const { text, smallestUnit } = resolveRelativeTime(value, options);

  useEffect(() => {
    if (!live) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    // reschedule after every tick so the cadence adapts as the smallest unit
    // grows (seconds → minutes → hours → …)
    const schedule = () => {
      const next = resolveRelativeTime(value, options).smallestUnit;
      timeoutId = setTimeout(() => {
        setTick((tick) => tick + 1);
        schedule();
      }, REFRESH_MS[next]);
    };

    schedule();

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, live, minUnit, maxUnit, maxUnits, locale, justNow]);

  const resolvedTitle =
    title === undefined ? formatDateTime(value, { locale }) : title;

  return (
    <time
      dateTime={toDate(value).toISOString()}
      title={resolvedTitle ?? undefined}
      suppressHydrationWarning
      {...props}
    >
      {text}
    </time>
  );
};

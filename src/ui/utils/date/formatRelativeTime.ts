import { type DateInput, toDate } from "./toDate";

const DEFAULT_LOCALE = "en-US";

// most-significant first; the order also encodes each unit's rank
const UNITS = ["year", "month", "day", "hour", "minute", "second"] as const;

export type RelativeTimeUnit = (typeof UNITS)[number];

export interface FormatRelativeTimeOptions {
  /** Reference point the value is compared against. Defaults to `new Date()`. */
  now?: DateInput;
  /**
   * Smallest unit to display. A difference below one of these reads as
   * {@link justNow} (e.g. `minUnit: "hour"` → anything under an hour is
   * "just now"). Defaults to `"minute"`.
   */
  minUnit?: RelativeTimeUnit;
  /**
   * Largest unit to display. Anything bigger is expressed in this unit instead
   * of rolling up (e.g. `maxUnit: "day"` → "876 days"). Defaults to `"year"`.
   */
  maxUnit?: RelativeTimeUnit;
  /**
   * Maximum number of units shown at once, most-significant first
   * (e.g. `3` → "2 years 6 months 11 days"). Units outside the
   * {@link minUnit}/{@link maxUnit} range are never shown, so this is an upper
   * bound. Defaults to `1`.
   */
  maxUnits?: number;
  /** BCP 47 locale(s) used to format the numbers and unit names. Defaults to `"en-US"`. */
  locale?: string | string[];
  /** Text returned when the difference is below `minUnit`. Defaults to `"just now"`. */
  justNow?: string;
}

/** Returns a copy of `date` advanced by `amount` of `unit` (calendar-aware). */
const addUnit = (date: Date, unit: RelativeTimeUnit, amount: number): Date => {
  const next = new Date(date);

  switch (unit) {
    case "year":
      next.setFullYear(next.getFullYear() + amount);
      break;
    case "month":
      next.setMonth(next.getMonth() + amount);
      break;
    case "day":
      next.setDate(next.getDate() + amount);
      break;
    case "hour":
      next.setHours(next.getHours() + amount);
      break;
    case "minute":
      next.setMinutes(next.getMinutes() + amount);
      break;
    case "second":
      next.setSeconds(next.getSeconds() + amount);
      break;
  }

  return next;
};

/** Rough count of whole `unit`s between two dates; refined by the caller. */
const estimateUnits = (from: Date, to: Date, unit: RelativeTimeUnit): number => {
  const ms = to.getTime() - from.getTime();

  switch (unit) {
    case "year":
      return to.getFullYear() - from.getFullYear();
    case "month":
      return (
        (to.getFullYear() - from.getFullYear()) * 12 +
        (to.getMonth() - from.getMonth())
      );
    case "day":
      return Math.floor(ms / 86_400_000);
    case "hour":
      return Math.floor(ms / 3_600_000);
    case "minute":
      return Math.floor(ms / 60_000);
    case "second":
      return Math.floor(ms / 1_000);
  }
};

/**
 * Largest integer `n` such that `from + n * unit <= to`. The estimate is
 * calendar-aware for months/years (shorter months, leap years) because it is
 * refined against real date arithmetic rather than a fixed millisecond span.
 */
const countWholeUnits = (
  from: Date,
  to: Date,
  unit: RelativeTimeUnit,
): number => {
  let count = Math.max(0, estimateUnits(from, to, unit));

  // the estimate can overshoot (e.g. the anniversary hasn't been reached)…
  while (count > 0 && addUnit(from, unit, count).getTime() > to.getTime()) {
    count--;
  }
  // …or undershoot; grow until one more step would pass `to`.
  while (addUnit(from, unit, count + 1).getTime() <= to.getTime()) {
    count++;
  }

  return count;
};

export interface ResolvedRelativeTime {
  /** The formatted string, e.g. `"3 days ago"`, `"in 2 months"`, `"just now"`. */
  text: string;
  /**
   * Smallest unit actually rendered. Drives how often a live view needs to
   * refresh. For a "just now" result it falls back to the smallest unit that
   * would appear next (the smallest unit in the `minUnit`/`maxUnit` range).
   */
  smallestUnit: RelativeTimeUnit;
  /** `true` when the target is in the future. */
  isFuture: boolean;
}

/**
 * Resolves a date relative to now into both its formatted string and the
 * smallest unit it renders. Prefer {@link formatRelativeTime} when you only
 * need the string; this variant exists for live views that must pick a refresh
 * cadence from the smallest rendered unit.
 */
export const resolveRelativeTime = (
  value: DateInput,
  {
    now,
    minUnit = "minute",
    maxUnit = "year",
    maxUnits = 1,
    locale = DEFAULT_LOCALE,
    justNow = "just now",
  }: FormatRelativeTimeOptions = {},
): ResolvedRelativeTime => {
  const target = toDate(value);
  const reference = now == null ? new Date() : toDate(now);

  const isFuture = target.getTime() > reference.getTime();
  const earlier = isFuture ? reference : target;
  const later = isFuture ? target : reference;

  // the eligible units, ordered most- to least-significant; order-agnostic so
  // swapping minUnit/maxUnit still behaves
  const first = Math.min(UNITS.indexOf(minUnit), UNITS.indexOf(maxUnit));
  const last = Math.max(UNITS.indexOf(minUnit), UNITS.indexOf(maxUnit));
  const candidates = UNITS.slice(first, last + 1);

  // walk the interval from the largest candidate unit down, consuming each
  let cursor = earlier;
  const parts: { unit: RelativeTimeUnit; value: number }[] = [];

  for (const unit of candidates) {
    const count = countWholeUnits(cursor, later, unit);
    if (count > 0) parts.push({ unit, value: count });
    cursor = addUnit(cursor, unit, count);
  }

  const shown = parts.slice(0, Math.max(1, maxUnits));
  // when nothing renders ("just now") the next change happens at the smallest
  // candidate unit, so report that as the refresh driver
  const smallestUnit = shown.at(-1)?.unit ?? candidates.at(-1) ?? minUnit;

  if (shown.length === 0) {
    return { text: justNow, smallestUnit, isFuture };
  }

  const body = shown
    .map(({ unit, value: count }) =>
      new Intl.NumberFormat(locale, {
        style: "unit",
        unit,
        unitDisplay: "long",
      }).format(count),
    )
    .join(" ");

  return {
    text: isFuture ? `in ${body}` : `${body} ago`,
    smallestUnit,
    isFuture,
  };
};

/**
 * Formats a date relative to now, e.g. `"3 days ago"`, `"in 2 months"`, or
 * `"just now"`.
 *
 * The displayed unit adapts to the size of the difference and can be compounded
 * to several units at once. `minUnit`/`maxUnit` bound which units may appear,
 * and `maxUnits` caps how many are shown (most-significant first). Zero-valued
 * units are skipped, so `maxUnits` picks the largest non-zero units — with the
 * default `maxUnits: 1` that is simply the single best-fitting unit.
 *
 * @example
 * formatRelativeTime(Date.now() - 24 * 60_000); // "24 minutes ago"
 * formatRelativeTime(Date.now() + 6 * 3_600_000); // "in 6 hours"
 * formatRelativeTime(Date.now() - 30_000); // "just now"
 *
 * @example
 * // compound output
 * formatRelativeTime(past, { maxUnits: 3 }); // "2 years 6 months 11 days"
 *
 * @example
 * // bounded units
 * formatRelativeTime(past, { maxUnit: "day" }); // "876 days ago"
 * formatRelativeTime(past, { maxUnits: 6, minUnit: "hour" });
 * // "2 years 6 months 11 days 9 hours ago" (minutes/seconds ignored)
 */
export const formatRelativeTime = (
  value: DateInput,
  options: FormatRelativeTimeOptions = {},
): string => resolveRelativeTime(value, options).text;

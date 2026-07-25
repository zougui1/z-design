import { type DateInput, toDate } from "./toDate";

const DEFAULT_LOCALE = "en-US";

const DEFAULT_OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

export interface FormatDateOptions extends Intl.DateTimeFormatOptions {
  /** BCP 47 locale(s). Defaults to `"en-US"`. */
  locale?: string | string[];
}

/**
 * Formats the date portion of a value using `Intl.DateTimeFormat`.
 *
 * Defaults to a medium date (e.g. `"Jul 25, 2026"`). Passing `dateStyle`
 * replaces the component defaults, since the two cannot be combined.
 *
 * @example
 * formatDate(new Date(2026, 6, 25)); // "Jul 25, 2026"
 * formatDate("2026-07-25", { dateStyle: "full" }); // "Saturday, July 25, 2026"
 * formatDate(Date.now(), { month: "long" }); // "July 25, 2026"
 */
export const formatDate = (
  value: DateInput,
  { locale = DEFAULT_LOCALE, ...options }: FormatDateOptions = {},
): string => {
  const defaults = options.dateStyle == null ? DEFAULT_OPTIONS : {};

  return new Intl.DateTimeFormat(locale, { ...defaults, ...options }).format(
    toDate(value),
  );
};

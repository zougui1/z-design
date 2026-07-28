import { type DateInput, toDate } from "./toDate";

const DEFAULT_LOCALE = "en-US";

const DEFAULT_OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
};

export interface FormatDateTimeOptions extends Intl.DateTimeFormatOptions {
  /** BCP 47 locale(s). Defaults to `"en-US"`. */
  locale?: string | string[];
}

/**
 * Formats both the date and time portions of a value using
 * `Intl.DateTimeFormat`.
 *
 * Defaults to a medium date with short time (e.g. `"Jul 25, 2026, 3:45 PM"`).
 * Passing `dateStyle` or `timeStyle` replaces the component defaults, since the
 * two cannot be combined.
 *
 * @example
 * formatDateTime(new Date(2026, 6, 25, 15, 45)); // "Jul 25, 2026, 3:45 PM"
 * formatDateTime(Date.now(), { dateStyle: "full", timeStyle: "short" });
 * formatDateTime(Date.now(), { hour12: false }); // "Jul 25, 2026, 15:45"
 */
export const formatDateTime = (
  value: DateInput,
  { locale = DEFAULT_LOCALE, ...options }: FormatDateTimeOptions = {},
): string => {
  const usesStyle = options.dateStyle != null || options.timeStyle != null;
  const defaults = usesStyle ? {} : DEFAULT_OPTIONS;

  return new Intl.DateTimeFormat(locale, { ...defaults, ...options }).format(
    toDate(value),
  );
};

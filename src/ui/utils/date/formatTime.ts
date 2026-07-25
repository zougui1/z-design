import { type DateInput, toDate } from "./toDate";

const DEFAULT_LOCALE = "en-US";

const DEFAULT_OPTIONS: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "2-digit",
};

export interface FormatTimeOptions extends Intl.DateTimeFormatOptions {
  /** BCP 47 locale(s). Defaults to `"en-US"`. */
  locale?: string | string[];
}

/**
 * Formats the time portion of a value using `Intl.DateTimeFormat`.
 *
 * Defaults to a short 12-hour time (e.g. `"3:45 PM"`). Passing `timeStyle`
 * replaces the component defaults, since the two cannot be combined.
 *
 * @example
 * formatTime(new Date(2026, 6, 25, 15, 45)); // "3:45 PM"
 * formatTime(Date.now(), { second: "2-digit" }); // "3:45:12 PM"
 * formatTime(Date.now(), { hour12: false }); // "15:45"
 */
export const formatTime = (
  value: DateInput,
  { locale = DEFAULT_LOCALE, ...options }: FormatTimeOptions = {},
): string => {
  const defaults = options.timeStyle == null ? DEFAULT_OPTIONS : {};

  return new Intl.DateTimeFormat(locale, { ...defaults, ...options }).format(
    toDate(value),
  );
};

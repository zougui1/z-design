const DEFAULT_LOCALE = "en-US";

export interface FormatNumberOptions extends Intl.NumberFormatOptions {
  /** BCP 47 locale(s). Defaults to `"en-US"`. */
  locale?: string | string[];
}

/**
 * Formats a number using `Intl.NumberFormat`.
 *
 * @example
 * formatNumber(1234.5); // "1,234.5"
 * formatNumber(0.1234, { style: "percent" }); // "12%"
 * formatNumber(1234.5, { maximumFractionDigits: 0 }); // "1,235"
 */
export const formatNumber = (
  value: number,
  { locale = DEFAULT_LOCALE, ...options }: FormatNumberOptions = {},
): string => {
  return new Intl.NumberFormat(locale, options).format(value);
};

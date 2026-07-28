const DEFAULT_LOCALE = "en-US";
const DEFAULT_CURRENCY = "USD";

export interface FormatCurrencyOptions
  extends Omit<Intl.NumberFormatOptions, "style"> {
  /** BCP 47 locale(s). Defaults to `"en-US"`. */
  locale?: string | string[];
  /** ISO 4217 currency code. Defaults to `"USD"`. */
  currency?: string;
}

/**
 * Formats a number as currency using `Intl.NumberFormat`.
 *
 * @example
 * formatCurrency(1234.5); // "$1,234.50"
 * formatCurrency(1234.5, { currency: "EUR", locale: "de-DE" }); // "1.234,50 €"
 * formatCurrency(1234, { maximumFractionDigits: 0 }); // "$1,234"
 */
export const formatCurrency = (
  value: number,
  {
    locale = DEFAULT_LOCALE,
    currency = DEFAULT_CURRENCY,
    ...options
  }: FormatCurrencyOptions = {},
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    ...options,
  }).format(value);
};

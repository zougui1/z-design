export type DateInput = Date | number | string;

/** Coerces a `Date`, timestamp, or date string into a `Date`. */
export const toDate = (value: DateInput): Date => {
  return value instanceof Date ? value : new Date(value);
};

import type { ReactFormExtendedApi } from "@tanstack/react-form";

export type AnyFormExtendedApi = ReactFormExtendedApi<
  Record<string, never>,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any
>;

/**
 * Controls when a form modal closes relative to its submission.
 * - `submit`: close as soon as the form passes validation and submission starts.
 * - `submitComplete`: close after the submit handler has resolved successfully.
 */
export type FormCloseOn = "submit" | "submitComplete" | "manual";

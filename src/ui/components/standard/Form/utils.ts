export const getFormErrorMessage = (error: unknown): string => {
  if (typeof error === "object" && error && "message" in error) {
    return String(error.message);
  }

  return String(error);
};

/**
 * Normalizes TanStack Form field errors (which can be strings, objects, or
 * validation issues) into the `{ message }[]` shape expected by the standard
 * components' `errors` prop.
 */
export const mapFieldErrors = (
  errors: readonly unknown[],
): { message?: string }[] => {
  return errors
    .filter((error) => error != null)
    .map((error) => ({ message: getFormErrorMessage(error) }));
};

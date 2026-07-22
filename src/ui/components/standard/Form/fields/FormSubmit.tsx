"use client";

import { Button, type ButtonProps } from "../../Button";
import { useFormContext } from "../context";

export interface FormSubmitProps extends Omit<ButtonProps, "type"> {}

export default function FormSubmit({
  children = "Submit",
  disabled,
  loading,
  ...props
}: FormSubmitProps) {
  const form = useFormContext();

  return (
    <form.Subscribe
      selector={(state) => ({
        canSubmit: state.canSubmit,
        isSubmitting: state.isSubmitting,
      })}
    >
      {({ canSubmit, isSubmitting }) => (
        <Button
          {...props}
          type="submit"
          disabled={disabled ?? !canSubmit}
          loading={loading ?? isSubmitting}
        >
          {children}
        </Button>
      )}
    </form.Subscribe>
  );
}

"use client";

import { Button, type ButtonProps } from "../../Button";
import { useFormContext } from "../context";

export interface FormSubmitButtonProps extends Omit<ButtonProps, "type"> {}

export default function FormSubmitButton({
  children = "Submit",
  disabled,
  loading,
  ...props
}: FormSubmitButtonProps) {
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
          disabled={disabled || !canSubmit || isSubmitting}
          loading={loading ?? isSubmitting}
        >
          {isSubmitting ? "Submitting..." : children}
        </Button>
      )}
    </form.Subscribe>
  );
}

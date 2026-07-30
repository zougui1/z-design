"use client";

import { Button, type ButtonProps } from "../../Button";
import { useFormContext } from "../context";

export interface FormCancelButtonProps extends Omit<ButtonProps, "type"> {}

export default function FormCancelButton({
  children = "Reset",
  variant = "outline",
  disabled,
  ...props
}: FormCancelButtonProps) {
  const form = useFormContext();

  return (
    <form.Subscribe
      selector={(state) => ({
        isSubmitting: state.isSubmitting,
      })}
    >
      {({ isSubmitting }) => (
        <Button
          {...props}
          type="button"
          variant={variant}
          disabled={disabled || isSubmitting}
        >
          {children}
        </Button>
      )}
    </form.Subscribe>
  );
}

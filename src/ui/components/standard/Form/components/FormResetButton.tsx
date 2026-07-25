"use client";

import { Button, type ButtonProps } from "../../Button";
import { useFormContext } from "../context";

export interface FormResetButtonProps extends Omit<ButtonProps, "type"> {}

export default function FormResetButton({
  children = "Reset",
  variant = "outline",
  disabled,
  onClick,
  ...props
}: FormResetButtonProps) {
  const form = useFormContext();

  return (
    <Button
      {...props}
      type="button"
      variant={variant}
      disabled={disabled}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        form.reset();
      }}
    >
      {children}
    </Button>
  );
}

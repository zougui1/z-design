"use client";

import { Button, type ButtonProps } from "../../Button";
import { useFormContext } from "../context";

export interface FormResetProps extends Omit<ButtonProps, "type"> {}

export default function FormReset({
  children = "Reset",
  variant = "outline",
  disabled,
  onClick,
  ...props
}: FormResetProps) {
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

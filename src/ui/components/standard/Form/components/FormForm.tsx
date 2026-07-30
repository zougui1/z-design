"use client";

import { useFormContext } from "../context";
import type { AnyFormExtendedApi } from "../types";

export interface FormFormProps extends Omit<
  React.ComponentProps<"form">,
  "onSubmit"
> {
  onSubmit?: (event: React.FormEvent, form: AnyFormExtendedApi) => void;
  onSubmitComplete?: (event: React.FormEvent, form: AnyFormExtendedApi) => void;
  onSubmitError?: (
    event: React.FormEvent,
    error: unknown,
    form: AnyFormExtendedApi,
  ) => void;
}

export default function FormForm({
  onSubmit,
  onSubmitComplete,
  onSubmitError,
  ...props
}: FormFormProps) {
  const form = useFormContext();

  return (
    <form
      {...props}
      onSubmit={async (event) => {
        event.preventDefault();
        event.stopPropagation();
        onSubmit?.(event, form);

        try {
          await form.handleSubmit();

          if (!form.state.isValid) return;
        } catch (error) {
          return onSubmitError?.(event, error, form);
        }

        onSubmitComplete?.(event, form);
      }}
    />
  );
}

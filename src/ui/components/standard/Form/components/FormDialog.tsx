"use client";

import { useRef } from "react";

import { mergeRefs } from "~/ui/utils";

import { Dialog, type DialogAction, type DialogProps } from "../../Dialog";
import { useFormContext } from "../context";
import { defaultDialogActions } from "../formActions";
import type { AnyFormExtendedApi, FormCloseOn } from "../types";
import FormForm from "./FormForm";

export interface FormDialogProps extends Omit<
  DialogProps,
  "actions" | "slotProps"
> {
  /** When the dialog closes relative to submission. Defaults to `submitSuccessful`. */
  closeOn?: FormCloseOn;
  /** Called after the form is successfully submitted. */
  onSubmit?: (
    event: React.FormEvent,
    form: AnyFormExtendedApi,
  ) => void | Promise<void>;
  onSubmitComplete?: (
    event: React.FormEvent,
    form: AnyFormExtendedApi,
  ) => void | Promise<void>;
  /** Called if submission throws. */
  onSubmitError?: (
    event: React.FormEvent,
    error: unknown,
    form: AnyFormExtendedApi,
  ) => void;
  /** Label of the default submit action. Defaults to `Submit`. */
  submitLabel?: React.ReactNode;
  /** Footer actions. Defaults to a cancel + submit pair. Fully overridable. */
  actions?: DialogAction[];
  slotProps?: DialogProps["slotProps"] & {
    /** Applied to the submit action (`type: "submit"`). */
    submit?: Partial<DialogAction>;
    /** Applied to the non-submit (cancel) actions. */
    cancel?: Partial<DialogAction>;
  };
}

export default function FormDialog({
  closeOn = "submitComplete",
  onSubmit,
  onSubmitComplete,
  onSubmitError,
  submitLabel = "Submit",
  actions,
  slotProps,
  onOpenChangeComplete,
  children,
  ...props
}: FormDialogProps) {
  const form = useFormContext();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const resolvedActions = actions ?? [
    defaultDialogActions.cancel(),
    defaultDialogActions.submit(),
  ];

  return (
    <Dialog
      {...props}
      actions={resolvedActions}
      slotProps={{
        ...slotProps,
        close: {
          ...slotProps?.close,
          ref: mergeRefs(closeButtonRef, slotProps?.close?.ref),
        },
        popup: {
          render: (
            <FormForm
              onSubmit={(event, form) => {
                onSubmit?.(event, form);

                if (closeOn === "submit") {
                  closeButtonRef.current?.click();
                }
              }}
              onSubmitComplete={(event, form) => {
                onSubmitComplete?.(event, form);

                if (closeOn === "submitComplete") {
                  closeButtonRef.current?.click();
                }
              }}
              onSubmitError={onSubmitError}
            />
          ),
          ...slotProps?.popup,
        },
      }}
      onOpenChangeComplete={(open) => {
        onOpenChangeComplete?.(open);
        if (!open) form.reset();
      }}
    >
      {children}
    </Dialog>
  );
}

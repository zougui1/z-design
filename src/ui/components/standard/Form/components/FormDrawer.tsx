"use client";

import { useRef } from "react";

import { mergeRefs } from "~/ui/utils";

import { Drawer, type DrawerAction, type DrawerProps } from "../../Drawer";
import { useFormContext } from "../context";
import { defaultDrawerActions } from "../formActions";
import type { AnyFormExtendedApi, FormCloseOn } from "../types";
import FormForm from "./FormForm";

export interface FormDrawerProps extends Omit<
  DrawerProps,
  "actions" | "slotProps"
> {
  /** When the drawer closes relative to submission. Defaults to `submitSuccessful`. */
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
  actions?: DrawerAction[];
  slotProps?: DrawerProps["slotProps"] & {
    /** Applied to the submit action (`type: "submit"`). */
    submit?: Partial<DrawerAction>;
    /** Applied to the non-submit (cancel) actions. */
    cancel?: Partial<DrawerAction>;
  };
}

export default function FormDrawer({
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
}: FormDrawerProps) {
  const form = useFormContext();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const resolvedActions = actions ?? [
    defaultDrawerActions.cancel(),
    defaultDrawerActions.submit(),
  ];

  return (
    <Drawer
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
    </Drawer>
  );
}

"use client";

import { useId, useState } from "react";

import { BaseButton, BaseDialog } from "~/ui/components";

export function CloseConfirmationDialog() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");
  const titleId = useId();

  return (
    <BaseDialog.Root
      open={dialogOpen}
      onOpenChange={(open) => {
        // Show the close confirmation if there’s text in the textarea
        if (!open && textareaValue) {
          setConfirmationOpen(true);
        } else {
          // Reset the text area value
          setTextareaValue("");
          // Open or close the dialog normally
          setDialogOpen(open);
        }
      }}
    >
      <BaseDialog.Trigger render={<BaseButton />}>Tweet</BaseDialog.Trigger>

      <BaseDialog.Portal>
        <BaseDialog.Backdrop />

        <BaseDialog.Popup>
          <BaseDialog.Header>
            <BaseDialog.Title id={titleId}>New tweet</BaseDialog.Title>
          </BaseDialog.Header>

          <BaseDialog.CloseIcon />

          <form
            className="mt-4 flex flex-col gap-6"
            onSubmit={(event) => {
              event.preventDefault();
              // Close the dialog when submitting
              setDialogOpen(false);
            }}
          >
            <textarea
              aria-labelledby={titleId}
              autoFocus
              required
              className="min-h-48 w-full rounded-md border px-3.5 py-2 text-base
                font-normal focus:outline-2 focus:-outline-offset-1
                focus:outline-blue-800"
              placeholder="What’s on your mind?"
              value={textareaValue}
              onChange={(event) => setTextareaValue(event.target.value)}
            />

            <BaseDialog.Footer>
              <BaseDialog.Close render={<BaseButton variant="outline" />}>
                Cancel
              </BaseDialog.Close>

              <BaseButton type="submit">Tweet</BaseButton>
            </BaseDialog.Footer>
          </form>
        </BaseDialog.Popup>
      </BaseDialog.Portal>

      {/* Confirmation dialog */}
      <BaseDialog.Root
        open={confirmationOpen}
        onOpenChange={setConfirmationOpen}
      >
        <BaseDialog.Portal>
          <BaseDialog.Popup>
            <BaseDialog.Header>
              <BaseDialog.Title>Discard tweet?</BaseDialog.Title>
              <BaseDialog.Description>
                Your tweet will be lost.
              </BaseDialog.Description>
            </BaseDialog.Header>

            <BaseDialog.Footer>
              <BaseDialog.Close render={<BaseButton variant="outline" />}>
                Go Back
              </BaseDialog.Close>
              <BaseDialog.Close
                render={<BaseButton />}
                onClick={() => setDialogOpen(false)}
              >
                Ok
              </BaseDialog.Close>
            </BaseDialog.Footer>
          </BaseDialog.Popup>
        </BaseDialog.Portal>
      </BaseDialog.Root>
    </BaseDialog.Root>
  );
}

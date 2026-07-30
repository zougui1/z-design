"use client";

import { useState } from "react";

import {
  ProfileFields,
  type ProfileValues,
  SubmittedPreview,
  useProfileForm,
} from "./_profileForm";

export function FormDialogDemo() {
  const [submitted, setSubmitted] = useState<string | null>(null);

  const form = useProfileForm((value: ProfileValues) => {
    setSubmitted(JSON.stringify(value, null, 2));
  });

  return (
    <form.AppForm>
      <div className="flex max-w-2xl flex-col gap-5">
        <p className="text-muted-foreground text-sm">
          <code>form.Dialog</code> renders the submit/cancel actions for you. It
          closes once submission succeeds (<code>closeWhen</code>) and resets
          the form afterwards.
        </p>

        <form.Dialog
          trigger="Edit profile"
          title="Edit profile"
          description="Fill in your details and save."
          submitLabel="Save changes"
        >
          <ProfileFields form={form} />
        </form.Dialog>

        <SubmittedPreview value={submitted} />
      </div>
    </form.AppForm>
  );
}

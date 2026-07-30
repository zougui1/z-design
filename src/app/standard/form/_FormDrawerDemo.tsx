"use client";

import { useState } from "react";

import { Button } from "~/ui";

import {
  ProfileFields,
  type ProfileValues,
  SubmittedPreview,
  useProfileForm,
} from "./_profileForm";

export function FormDrawerDemo() {
  const [submitted, setSubmitted] = useState<string | null>(null);

  const form = useProfileForm((value: ProfileValues) => {
    setSubmitted(JSON.stringify(value, null, 2));
  });

  return (
    <form.AppForm>
      <div className="flex max-w-2xl flex-col gap-5">
        <p className="text-muted-foreground text-sm">
          <code>form.Drawer</code> shares the same API as{" "}
          <code>form.Dialog</code>. Here <code>closeWhen="submitted"</code>{" "}
          closes as soon as validation passes.
        </p>

        <form.Drawer
          trigger={<Button>Edit profile</Button>}
          title="Edit profile"
          description="Fill in your details and save."
          side="right"
          submitLabel="Save changes"
        >
          <ProfileFields form={form} />
        </form.Drawer>

        <SubmittedPreview value={submitted} />
      </div>
    </form.AppForm>
  );
}

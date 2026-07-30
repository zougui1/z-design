"use client";

import { z } from "zod";

import { useAppForm } from "~/ui/components";

const schema = z.object({
  name: z.string().min(1, "Name is required."),
  role: z.string().min(1, "Please pick a role."),
  agree: z.boolean().refine((value) => value, "You must accept the terms."),
});

export type ProfileValues = z.infer<typeof schema>;

const roles = [
  { label: "Engineer", value: "engineer" },
  { label: "Designer", value: "designer" },
  { label: "Product Manager", value: "product-manager" },
  { label: "Other", value: "other" },
];

/** A small shared form reused across the inline, dialog, and drawer demos. */
export function useProfileForm(onSubmit: (value: ProfileValues) => void) {
  return useAppForm({
    defaultValues: {
      name: "",
      role: "",
      agree: false,
    },
    validators: {
      onSubmit: schema,
    },
    onSubmit: async ({ value }) => {
      await new Promise((r) => setTimeout(r, 2000));
      onSubmit(value);
    },
  });
}

export function ProfileFields({
  form,
}: {
  form: ReturnType<typeof useProfileForm>;
}) {
  return (
    <div className="flex flex-col gap-5">
      <form.AppField name="name">
        {(field) => (
          <field.Input label="Name" placeholder="Jane Doe" clearable />
        )}
      </form.AppField>

      <form.AppField name="role">
        {(field) => (
          <field.Select
            label="Role"
            placeholder="Select a role"
            items={roles}
          />
        )}
      </form.AppField>

      <form.AppField name="agree">
        {(field) => (
          <field.Checkbox label="I accept the terms and conditions" />
        )}
      </form.AppField>
    </div>
  );
}

export function SubmittedPreview({ value }: { value: string | null }) {
  if (!value) return null;

  return (
    <pre
      className="bg-background-light border-border overflow-x-auto rounded-sm
        border p-4 text-sm"
    >
      {value}
    </pre>
  );
}

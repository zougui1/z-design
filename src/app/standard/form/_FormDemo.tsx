"use client";

import { useState } from "react";
import { z } from "zod";

import { type DateRange, useAppForm } from "~/ui/components";

const schema = z.object({
  name: z.string().min(1, "Name is required."),
  bio: z
    .string()
    .min(1, "Bio is required")
    .max(160, "Keep it under 160 characters."),
  role: z.string().min(1, "Please pick a role."),
  country: z.string().min(1, "Country is required"),
  framework: z.string().min(1, "Framework is required"),
  age: z
    .number({ invalid_type_error: "Age is required." })
    .min(18, "Must be 18 or older."),
  birthday: z.date({
    invalid_type_error: "Please pick your birthday.",
    required_error: "Please pick your birthday.",
  }),
  stay: z
    .custom<DateRange>()
    .refine(
      (value) => Boolean(value?.from && value?.to),
      "Please pick a start and end date.",
    ),
  startTime: z.date({
    invalid_type_error: "Please pick a start time.",
    required_error: "Please pick a start time.",
  }),
  agree: z.boolean().refine((value) => value, "You must accept the terms."),
});

const roles = [
  { label: "Engineer", value: "engineer" },
  { label: "Designer", value: "designer" },
  { label: "Product Manager", value: "product-manager" },
  { label: "Other", value: "other" },
];

const countries = [
  "France",
  "Germany",
  "Japan",
  "Spain",
  "United Kingdom",
  "United States",
];

const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
  "Solid",
];

export function FormDemo() {
  const [submitted, setSubmitted] = useState<string | null>(null);

  const form = useAppForm({
    defaultValues: {
      name: "",
      bio: "",
      role: "",
      country: "",
      framework: "",
      age: null as number | null,
      birthday: undefined as Date | undefined,
      stay: undefined as DateRange | undefined,
      startTime: undefined as Date | undefined,
      agree: false,
    },
    validators: {
      onSubmit: schema,
    },
    onSubmit: ({ value }) => {
      setSubmitted(JSON.stringify(value, null, 2));
    },
  });

  return (
    <form
      className="flex max-w-2xl flex-col gap-5"
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        void form.handleSubmit();
      }}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <form.AppField name="name">
          {(field) => (
            <field.Input
              label="Name"
              placeholder="Jane Doe"
              description="Your full name."
              clearable
            />
          )}
        </form.AppField>

        <form.AppField name="age">
          {(field) => (
            <field.NumberField
              label="Age"
              placeholder="18"
              min={0}
              description="Must be 18 or older."
            />
          )}
        </form.AppField>

        <div className="sm:col-span-2">
          <form.AppField name="bio">
            {(field) => (
              <field.Textarea
                label="Bio"
                placeholder="Tell us about yourself"
              />
            )}
          </form.AppField>
        </div>

        <form.AppField name="role">
          {(field) => (
            <field.Select
              label="Role"
              placeholder="Select a role"
              items={roles}
            />
          )}
        </form.AppField>

        <form.AppField name="country">
          {(field) => (
            <field.Combobox
              label="Country"
              placeholder="Select a country"
              items={countries}
            />
          )}
        </form.AppField>

        <form.AppField name="framework">
          {(field) => (
            <field.Autocomplete
              label="Favorite framework"
              placeholder="Search frameworks"
              items={frameworks}
            />
          )}
        </form.AppField>

        <form.AppField name="birthday">
          {(field) => <field.DatePicker label="Birthday" clearable />}
        </form.AppField>

        <div className="sm:col-span-2">
          <form.AppField name="stay">
            {(field) => (
              <field.DateRangePicker
                label="Stay"
                clearable
                description="Select a check-in and check-out date."
              />
            )}
          </form.AppField>
        </div>

        <form.AppField name="startTime">
          {(field) => (
            <field.TimeInput label="Start time" description="When to begin." />
          )}
        </form.AppField>

        <div className="sm:col-span-2">
          <form.AppField name="agree">
            {(field) => (
              <field.Checkbox label="I accept the terms and conditions" />
            )}
          </form.AppField>
        </div>
      </div>

      <form.AppForm>
        <div className="flex gap-2">
          <form.SubmitButton>Submit</form.SubmitButton>
          <form.ResetButton onClick={() => setSubmitted(null)}>
            Reset
          </form.ResetButton>
        </div>
      </form.AppForm>

      {submitted && (
        <pre
          className="bg-background-light border-border overflow-x-auto
            rounded-sm border p-4 text-sm"
        >
          {submitted}
        </pre>
      )}
    </form>
  );
}

"use client";

import { NumberField, type NumberFieldProps } from "../../NumberField";
import { useFieldContext } from "../context";
import { mapFieldErrors } from "../utils";

export interface FormNumberFieldProps
  extends Omit<
    NumberFieldProps,
    "value" | "onValueChange" | "errors" | "touched" | "dirty" | "name"
  > {}

export default function FormNumberField(props: FormNumberFieldProps) {
  const field = useFieldContext<number | null>();

  return (
    <NumberField
      {...props}
      name={field.name}
      value={field.state.value}
      onValueChange={(value) => field.handleChange(value)}
      errors={mapFieldErrors(field.state.meta.errors)}
      touched={field.state.meta.isTouched}
      dirty={field.state.meta.isDirty}
    />
  );
}

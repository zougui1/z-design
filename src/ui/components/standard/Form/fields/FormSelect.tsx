"use client";

import { Select, type SelectProps } from "../../Select";
import { useFieldContext } from "../context";
import { mapFieldErrors } from "../utils";

export interface FormSelectProps<Value>
  extends Omit<
    SelectProps<Value, false>,
    "value" | "onValueChange" | "errors" | "touched" | "dirty" | "name"
  > {}

export default function FormSelect<Value = string>(
  props: FormSelectProps<Value>,
) {
  const field = useFieldContext<Value>();

  return (
    <Select
      {...props}
      name={field.name}
      value={field.state.value}
      onValueChange={(value) => field.handleChange(value as Value)}
      errors={mapFieldErrors(field.state.meta.errors)}
      touched={field.state.meta.isTouched}
      dirty={field.state.meta.isDirty}
    />
  );
}

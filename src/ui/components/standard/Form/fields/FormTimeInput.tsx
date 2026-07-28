"use client";

import { TimeInput, type TimeInputProps } from "../../TimeInput";
import { useFieldContext } from "../context";
import { mapFieldErrors } from "../utils";

export interface FormTimeInputProps
  extends Omit<
    TimeInputProps,
    "value" | "onValueChange" | "onBlur" | "errors" | "touched" | "dirty" | "name"
  > {}

export default function FormTimeInput(props: FormTimeInputProps) {
  const field = useFieldContext<Date | undefined>();

  return (
    <TimeInput
      {...props}
      name={field.name}
      value={field.state.value}
      onValueChange={(date) => field.handleChange(date)}
      onBlur={field.handleBlur}
      errors={mapFieldErrors(field.state.meta.errors)}
      touched={field.state.meta.isTouched}
      dirty={field.state.meta.isDirty}
    />
  );
}

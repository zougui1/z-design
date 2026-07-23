"use client";

import { DatePicker, type DatePickerProps } from "../../DatePicker";
import { useFieldContext } from "../context";
import { mapFieldErrors } from "../utils";

export interface FormDatePickerProps
  extends Omit<
    DatePickerProps,
    "value" | "onValueChange" | "errors" | "touched" | "dirty" | "name"
  > {}

export default function FormDatePicker(props: FormDatePickerProps) {
  const field = useFieldContext<Date | undefined>();

  return (
    <DatePicker
      {...props}
      name={field.name}
      value={field.state.value}
      onValueChange={(date) => field.handleChange(date)}
      errors={mapFieldErrors(field.state.meta.errors)}
      touched={field.state.meta.isTouched}
      dirty={field.state.meta.isDirty}
    />
  );
}

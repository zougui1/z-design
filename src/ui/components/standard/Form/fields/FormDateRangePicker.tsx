"use client";

import {
  DateRangePicker,
  type DateRange,
  type DateRangePickerProps,
} from "../../DateRangePicker";
import { useFieldContext } from "../context";
import { mapFieldErrors } from "../utils";

export interface FormDateRangePickerProps
  extends Omit<
    DateRangePickerProps,
    "value" | "onValueChange" | "errors" | "touched" | "dirty" | "name"
  > {}

export default function FormDateRangePicker(props: FormDateRangePickerProps) {
  const field = useFieldContext<DateRange | undefined>();

  return (
    <DateRangePicker
      {...props}
      name={field.name}
      value={field.state.value}
      onValueChange={(range) => field.handleChange(range)}
      errors={mapFieldErrors(field.state.meta.errors)}
      touched={field.state.meta.isTouched}
      dirty={field.state.meta.isDirty}
    />
  );
}

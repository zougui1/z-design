"use client";

import { Textarea, type TextareaProps } from "../../Textarea";
import { useFieldContext } from "../context";
import { mapFieldErrors } from "../utils";

export interface FormTextareaProps
  extends Omit<
    TextareaProps,
    "value" | "onChange" | "onBlur" | "errors" | "touched" | "dirty" | "name"
  > {}

export default function FormTextarea(props: FormTextareaProps) {
  const field = useFieldContext<string>();

  return (
    <Textarea
      {...props}
      name={field.name}
      value={field.state.value}
      onChange={(event) => field.handleChange(event.target.value)}
      onBlur={field.handleBlur}
      errors={mapFieldErrors(field.state.meta.errors)}
      touched={field.state.meta.isTouched}
      dirty={field.state.meta.isDirty}
    />
  );
}

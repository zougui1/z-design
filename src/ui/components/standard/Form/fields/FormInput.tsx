"use client";

import { Input, type InputProps } from "../../Input";
import { useFieldContext } from "../context";
import { mapFieldErrors } from "../utils";

export interface FormInputProps
  extends Omit<
    InputProps,
    "value" | "onChange" | "onBlur" | "errors" | "touched" | "dirty" | "name"
  > {}

export default function FormInput(props: FormInputProps) {
  const field = useFieldContext<string>();

  return (
    <Input
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

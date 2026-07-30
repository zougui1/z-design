"use client";

import { Select, type SelectProps } from "../../Select";
import { useFieldContext } from "../context";
import { mapFieldErrors } from "../utils";

type SelectValue<
  Value,
  Multiple extends boolean | undefined,
> = Multiple extends true ? Value[] : Value;

export interface FormSelectProps<
  Value,
  Multiple extends boolean | undefined = false,
> extends Omit<
    SelectProps<Value, Multiple>,
    "value" | "onValueChange" | "errors" | "touched" | "dirty" | "name"
  > {}

export default function FormSelect<
  Value = string,
  Multiple extends boolean | undefined = false,
>(props: FormSelectProps<Value, Multiple>) {
  const field = useFieldContext<SelectValue<Value, Multiple>>();

  return (
    <Select
      {...(props as SelectProps<Value, Multiple>)}
      name={field.name}
      value={field.state.value}
      onValueChange={(value) =>
        field.handleChange(value as SelectValue<Value, Multiple>)
      }
      errors={mapFieldErrors(field.state.meta.errors)}
      touched={field.state.meta.isTouched}
      dirty={field.state.meta.isDirty}
    />
  );
}

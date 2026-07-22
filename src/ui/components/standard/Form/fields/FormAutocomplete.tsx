"use client";

import { Autocomplete, type AutocompleteProps } from "../../Autocomplete";
import { useFieldContext } from "../context";
import { mapFieldErrors } from "../utils";

export interface FormAutocompleteProps<ItemValue>
  extends Omit<
    AutocompleteProps<ItemValue>,
    "value" | "onValueChange" | "errors" | "touched" | "dirty" | "name"
  > {}

export default function FormAutocomplete<ItemValue = string>(
  props: FormAutocompleteProps<ItemValue>,
) {
  const field = useFieldContext<string>();

  return (
    <Autocomplete
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

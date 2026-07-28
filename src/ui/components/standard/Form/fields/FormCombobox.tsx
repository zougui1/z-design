"use client";

import { BaseField } from "../../../base";
import { Combobox, type ComboboxProps } from "../../Combobox";
import { useFieldContext } from "../context";
import { mapFieldErrors } from "../utils";

type ComboboxValue<
  Value,
  Multiple extends boolean | undefined,
> = Multiple extends true ? Value[] : Value;

export type FormComboboxProps<
  Value,
  Multiple extends boolean | undefined = false,
> = Omit<ComboboxProps<Value, Multiple>, "value" | "onValueChange"> & {
  label?: React.ReactNode;
  description?: React.ReactNode;
  fieldSlotProps?: {
    root?: Partial<Omit<BaseField.Root.Props, "children" | "invalid">>;
    label?: Partial<Omit<BaseField.Label.Props, "children">>;
    error?: Partial<Omit<BaseField.Error.Props, "error">>;
    description?: Partial<Omit<BaseField.Description.Props, "children">>;
  };
};

export default function FormCombobox<
  Value = string,
  Multiple extends boolean | undefined = false,
>({ label, description, fieldSlotProps, ...props }: FormComboboxProps<Value, Multiple>) {
  const field = useFieldContext<ComboboxValue<Value, Multiple>>();
  const errors = mapFieldErrors(field.state.meta.errors);

  return (
    <BaseField.Root {...fieldSlotProps?.root} invalid={!!errors.length}>
      {label && (
        <BaseField.Label {...fieldSlotProps?.label}>{label}</BaseField.Label>
      )}

      <Combobox
        {...(props as ComboboxProps<Value, Multiple>)}
        value={field.state.value}
        onValueChange={(value) =>
          field.handleChange(value as ComboboxValue<Value, Multiple>)
        }
      />

      <BaseField.Error errors={errors} {...fieldSlotProps?.error} />

      {description && (
        <BaseField.Description {...fieldSlotProps?.description}>
          {description}
        </BaseField.Description>
      )}
    </BaseField.Root>
  );
}

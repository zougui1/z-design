"use client";

import { BaseField } from "../../../base";
import { Combobox, type ComboboxProps } from "../../Combobox";
import { normalizedddGetters } from "../../Combobox/utils";
import { useFieldContext } from "../context";
import { mapFieldErrors } from "../utils";

type FormComboboxValue<Multiple extends boolean | undefined> =
  Multiple extends true ? string[] : string;

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
>({
  label,
  description,
  fieldSlotProps,
  ...props
}: FormComboboxProps<Value, Multiple>) {
  const field = useFieldContext<FormComboboxValue<Multiple>>();
  const errors = mapFieldErrors(field.state.meta.errors);

  const { items, getValue: propsGetValue, getLabel, multiple } =
    props as ComboboxProps<Value, Multiple> & {
      items: Value[] | readonly Value[];
      getValue?: (value: Value) => string;
      getLabel?: (value: Value) => React.ReactNode;
      multiple?: Multiple;
    };

  const { getValue } = normalizedddGetters(items, {
    getValue: propsGetValue,
    getLabel,
  });
  // Falls back to identity when items aren't the recognized string/object
  // shapes, preserving the raw item as the stored value.
  const extract = getValue ?? ((item: Value) => item as unknown as string);

  // The field stores the scalar value(s); map back to the item object(s) so
  // the controlled Combobox keeps referential equality for the selection.
  const value = multiple
    ? items.filter((item) =>
        (field.state.value as string[] | undefined)?.includes(extract(item)),
      )
    : items.find((item) => extract(item) === field.state.value) ?? null;

  return (
    <BaseField.Root {...fieldSlotProps?.root} invalid={!!errors.length}>
      {label && (
        <BaseField.Label {...fieldSlotProps?.label}>{label}</BaseField.Label>
      )}

      <Combobox
        {...(props as ComboboxProps<Value, Multiple>)}
        value={value as ComboboxProps<Value, Multiple>["value"]}
        onValueChange={(next) =>
          field.handleChange(
            (multiple
              ? ((next ?? []) as Value[]).map(extract)
              : next == null
                ? next
                : extract(next as Value)) as FormComboboxValue<Multiple>,
          )
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

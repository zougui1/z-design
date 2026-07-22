"use client";

import { BaseField } from "../../../base";
import { Checkbox, type CheckboxProps } from "../../Checkbox";
import { useFieldContext } from "../context";
import { mapFieldErrors } from "../utils";

export interface FormCheckboxProps
  extends Omit<
    CheckboxProps,
    "checked" | "onCheckedChange" | "onBlur" | "name" | "slotProps"
  > {
  label?: React.ReactNode;
  description?: React.ReactNode;
  slotProps?: CheckboxProps["slotProps"] & {
    field?: Partial<
      Omit<BaseField.Root.Props, "children" | "invalid" | "disabled">
    >;
    label?: Partial<Omit<BaseField.Label.Props, "children">>;
    error?: Partial<Omit<BaseField.Error.Props, "error">>;
    description?: Partial<Omit<BaseField.Description.Props, "children">>;
  };
}

export default function FormCheckbox({
  label,
  description,
  disabled,
  slotProps,
  ...props
}: FormCheckboxProps) {
  const field = useFieldContext<boolean>();
  const errors = mapFieldErrors(field.state.meta.errors);

  return (
    <BaseField.Root
      orientation="vertical"
      {...slotProps?.field}
      disabled={disabled}
      invalid={!!errors.length}
    >
      <BaseField.Label {...slotProps?.label}>
        <Checkbox
          {...props}
          name={field.name}
          disabled={disabled}
          checked={field.state.value}
          onCheckedChange={(checked) => field.handleChange(checked)}
          onBlur={field.handleBlur}
          slotProps={{
            indicator: slotProps?.indicator,
            icon: slotProps?.icon,
          }}
        />

        {label}
      </BaseField.Label>

      <BaseField.Error errors={errors} {...slotProps?.error} />

      {description && (
        <BaseField.Description {...slotProps?.description}>
          {description}
        </BaseField.Description>
      )}
    </BaseField.Root>
  );
}

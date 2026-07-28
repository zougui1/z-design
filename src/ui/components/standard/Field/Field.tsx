"use client";

import { BaseField } from "../../base";

export interface FieldProps extends BaseField.Root.Props {
  label?: React.ReactNode;
  description?: React.ReactNode;
  errors?: { message?: string }[];
  slotProps?: {
    label?: Partial<Omit<BaseField.Label.Props, "children">>;
    error?: Partial<Omit<BaseField.Error.Props, "error">>;
    description?: Partial<Omit<BaseField.Description.Props, "children">>;
  };
}

/**
 * Generic labelled field wrapper (label + error + description) around any
 * control. Pass the control as children — wrap it in `BaseField.Control` (or a
 * standard input) to associate it with the label.
 */
export const Field = ({
  label,
  description,
  errors,
  invalid,
  children,
  slotProps,
  ...props
}: FieldProps) => {
  return (
    <BaseField.Root invalid={invalid || !!errors?.length} {...props}>
      {label && (
        <BaseField.Label {...slotProps?.label}>{label}</BaseField.Label>
      )}

      {children}

      <BaseField.Error errors={errors} {...slotProps?.error} />

      {description && (
        <BaseField.Description {...slotProps?.description}>
          {description}
        </BaseField.Description>
      )}
    </BaseField.Root>
  );
};

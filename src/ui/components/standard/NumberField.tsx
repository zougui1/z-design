"use client";

import { Minus, Plus } from "lucide-react";

import { BaseField, BaseNumberField } from "../base";

export interface NumberFieldProps
  extends
    BaseNumberField.Root.Props,
    Pick<BaseField.Root.Props, "dirty" | "touched" | "invalid"> {
  label?: React.ReactNode;
  errors?: { message?: string }[];
  description?: React.ReactNode;
  placeholder?: string;
  slotProps?: {
    root?: Partial<
      Omit<BaseField.Root.Props, "children" | "dirty" | "touched" | "invalid">
    >;
    label?: Partial<Omit<BaseField.Label.Props, "children">>;
    error?: Partial<Omit<BaseField.Error.Props, "error">>;
    description?: Partial<Omit<BaseField.Description.Props, "children">>;
    control?: Partial<BaseField.Control.Props>;
    group?: Partial<BaseNumberField.Group.Props>;
    input?: Partial<BaseNumberField.Input.Props>;
    decrement?: Partial<BaseNumberField.Decrement.Props>;
    increment?: Partial<BaseNumberField.Increment.Props>;
  };
}

export const NumberField = ({
  label,
  errors,
  description,
  placeholder,
  disabled,
  dirty,
  touched,
  invalid,
  slotProps,
  ...props
}: NumberFieldProps) => {
  const isInvalid = invalid || !!errors?.length;

  return (
    <BaseField.Root
      {...slotProps?.root}
      disabled={disabled}
      dirty={dirty}
      touched={touched}
      invalid={isInvalid}
    >
      {label && (
        <BaseField.Label {...slotProps?.label}>{label}</BaseField.Label>
      )}

      <BaseNumberField.Root disabled={disabled} {...props}>
        <BaseNumberField.Group
          {...slotProps?.group}
          aria-invalid={isInvalid || undefined}
          className={
            // single bordered container; buttons + input sit borderless inside
            `border-border bg-background-light focus-within:border-primary
            focus-within:ring-primary/50 aria-invalid:border-destructive
            aria-invalid:ring-destructive/50 has-disabled:opacity-50
            flex h-9 w-full items-center overflow-hidden rounded-sm border
            shadow-sm transition-colors focus-within:ring-3`
          }
        >
          <BaseNumberField.Decrement {...slotProps?.decrement}>
            <Minus />
          </BaseNumberField.Decrement>

          <BaseField.Control
            {...slotProps?.control}
            render={
              <BaseNumberField.Input
                placeholder={placeholder}
                {...slotProps?.input}
                className={`h-full w-full min-w-0 flex-1 border-x
                  border-border bg-transparent px-2 text-center text-sm
                  tabular-nums outline-none
                  disabled:cursor-not-allowed`}
              />
            }
          />

          <BaseNumberField.Increment {...slotProps?.increment}>
            <Plus />
          </BaseNumberField.Increment>
        </BaseNumberField.Group>
      </BaseNumberField.Root>

      <BaseField.Error errors={errors} {...slotProps?.error} />

      {description && (
        <BaseField.Description {...slotProps?.description}>
          {description}
        </BaseField.Description>
      )}
    </BaseField.Root>
  );
};

import {
  BaseField,
  BaseTextarea,
  type BaseTextareaProps,
} from "../base";

export interface TextareaProps
  extends
    BaseTextareaProps,
    Pick<BaseField.Root.Props, "dirty" | "touched" | "invalid"> {
  label?: React.ReactNode;
  errors?: { message?: string }[];
  description?: React.ReactNode;
  slotProps?: {
    root?: Partial<
      Omit<BaseField.Root.Props, "children" | "dirty" | "touched" | "invalid">
    >;
    label?: Partial<Omit<BaseField.Label.Props, "children">>;
    control?: Partial<BaseField.Control.Props>;
    error?: Partial<Omit<BaseField.Error.Props, "error">>;
    description?: Partial<Omit<BaseField.Description.Props, "children">>;
  };
}

export const Textarea = ({
  label,
  errors,
  description,
  disabled,
  dirty,
  touched,
  invalid,
  slotProps,
  ...props
}: TextareaProps) => {
  return (
    <BaseField.Root
      {...slotProps?.root}
      disabled={disabled}
      dirty={dirty}
      touched={touched}
      invalid={invalid || !!errors?.length}
    >
      {label && (
        <BaseField.Label {...slotProps?.label}>{label}</BaseField.Label>
      )}

      <BaseField.Control
        render={<BaseTextarea {...props} disabled={disabled} />}
        {...slotProps?.control}
      />

      <BaseField.Error errors={errors} {...slotProps?.error} />

      {description && (
        <BaseField.Description {...slotProps?.description}>
          {description}
        </BaseField.Description>
      )}
    </BaseField.Root>
  );
};

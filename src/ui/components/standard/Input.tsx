import {
  BaseField,
  BaseInput,
  BaseInputGroup,
  type BaseInputProps,
} from "../base";

export interface InputProps
  extends
    BaseInputProps,
    Pick<BaseField.Root.Props, "dirty" | "touched" | "invalid"> {
  label?: React.ReactNode;
  errors?: { message?: string }[];
  description?: React.ReactNode;
  startAddon?: React.ReactNode;
  endAddon?: React.ReactNode;
  slotProps?: {
    root?: Partial<
      Omit<BaseField.Root.Props, "children" | "dirty" | "touched" | "invalid">
    >;
    label?: Partial<Omit<BaseField.Label.Props, "children">>;
    control?: Partial<BaseField.Control.Props>;
    error?: Partial<Omit<BaseField.Error.Props, "error">>;
    description?: Partial<Omit<BaseField.Description.Props, "children">>;

    inbputGroup?: Partial<Omit<BaseInputGroup.Root.Props, "children">>;
    startAddon?: Partial<Omit<BaseInputGroup.Addon.Props, "children">>;
    endAddon?: Partial<Omit<BaseInputGroup.Addon.Props, "children">>;
  };
}

export const Input = ({
  label,
  errors,
  description,
  disabled,
  dirty,
  touched,
  invalid,
  startAddon,
  endAddon,
  slotProps,
  ...props
}: InputProps) => {
  const renderControl = () => {
    if (!startAddon && !endAddon) {
      return (
        <BaseField.Control
          render={<BaseInput {...props} disabled={disabled} />}
          {...slotProps?.control}
        />
      );
    }

    return (
      <BaseInputGroup.Root {...slotProps?.inbputGroup}>
        {startAddon && (
          <BaseInputGroup.Addon align="inline-start" {...slotProps?.startAddon}>
            {startAddon}
          </BaseInputGroup.Addon>
        )}

        <BaseField.Control
          render={
            <BaseInputGroup.Input
              {...props}
              disabled={disabled}
              data-slot="input-group-control"
            />
          }
          {...slotProps?.control}
        />

        {endAddon && (
          <BaseInputGroup.Addon align="inline-end" {...slotProps?.endAddon}>
            {endAddon}
          </BaseInputGroup.Addon>
        )}
      </BaseInputGroup.Root>
    );
  };

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

      {renderControl()}

      <BaseField.Error errors={errors} {...slotProps?.error} />

      {description && (
        <BaseField.Description {...slotProps?.description}>
          {description}
        </BaseField.Description>
      )}
    </BaseField.Root>
  );
};

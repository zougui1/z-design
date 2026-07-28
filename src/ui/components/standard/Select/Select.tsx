"use client";

import { BaseField, BaseSelect } from "../../base";

export interface SelectItem<Value> {
  label: React.ReactNode;
  value: Value;
  disabled?: boolean;
  slotProps?: {
    item?: Partial<Omit<BaseSelect.ItemProps, "value" | "children">>;
    itemText?: Partial<Omit<BaseSelect.ItemTextProps, "children">>;
    itemIndicator?: Partial<BaseSelect.ItemIndicatorProps>;
  };
}

export interface SelectProps<
  Value,
  Multiple extends boolean | undefined = false,
> extends
    Omit<BaseSelect.RootProps<Value, Multiple>, "items">,
    Pick<BaseField.Root.Props, "dirty" | "touched" | "invalid"> {
  items: SelectItem<Value>[];
  label?: React.ReactNode;
  errors?: { message?: string }[];
  description?: React.ReactNode;
  placeholder?: React.ReactNode;
  slotProps?: {
    root?: Partial<
      Omit<BaseField.Root.Props, "children" | "dirty" | "touched" | "invalid">
    >;
    label?: Partial<Omit<BaseField.Label.Props, "children">>;
    error?: Partial<Omit<BaseField.Error.Props, "error">>;
    description?: Partial<Omit<BaseField.Description.Props, "children">>;

    control?: Partial<BaseField.Control.Props>;
    trigger?: Partial<Omit<BaseSelect.TriggerProps, "children">>;
    value?: Partial<Omit<BaseSelect.ValueProps, "placeholder">>;
    icon?: Partial<BaseSelect.IconProps>;
    portal?: Partial<Omit<BaseSelect.PortalProps, "children">>;
    positioner?: Partial<Omit<BaseSelect.PositionerProps, "children">>;
    popup?: Partial<Omit<BaseSelect.PopupProps, "children">>;
    list?: Partial<Omit<BaseSelect.ListProps, "children">>;
    scrollUpArrow?: Partial<BaseSelect.ScrollUpArrowProps>;
    scrollDownArrow?: Partial<BaseSelect.ScrollDownArrowProps>;
  };
}

export function Select<Value, Multiple extends boolean | undefined = false>({
  items,
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
}: SelectProps<Value, Multiple>) {
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

      <BaseSelect.Root items={items} disabled={disabled} {...props}>
        <BaseField.Control
          {...slotProps?.control}
          render={
            <BaseSelect.Trigger
              aria-invalid={isInvalid || undefined}
              {...slotProps?.trigger}
            >
              <BaseSelect.Value placeholder={placeholder} {...slotProps?.value} />
              <BaseSelect.Icon {...slotProps?.icon} />
            </BaseSelect.Trigger>
          }
        />

        <BaseSelect.Portal {...slotProps?.portal}>
          <BaseSelect.Positioner {...slotProps?.positioner}>
            <BaseSelect.Popup {...slotProps?.popup}>
              <BaseSelect.ScrollUpArrow {...slotProps?.scrollUpArrow} />

              <BaseSelect.List {...slotProps?.list}>
                {items.map((item, index) => (
                  <BaseSelect.Item
                    key={index}
                    value={item.value}
                    disabled={item.disabled}
                    {...item.slotProps?.item}
                  >
                    <BaseSelect.ItemText {...item.slotProps?.itemText}>
                      {item.label}
                    </BaseSelect.ItemText>

                    <BaseSelect.ItemIndicator {...item.slotProps?.itemIndicator} />
                  </BaseSelect.Item>
                ))}
              </BaseSelect.List>

              <BaseSelect.ScrollDownArrow {...slotProps?.scrollDownArrow} />
            </BaseSelect.Popup>
          </BaseSelect.Positioner>
        </BaseSelect.Portal>
      </BaseSelect.Root>

      <BaseField.Error errors={errors} {...slotProps?.error} />

      {description && (
        <BaseField.Description {...slotProps?.description}>
          {description}
        </BaseField.Description>
      )}
    </BaseField.Root>
  );
}

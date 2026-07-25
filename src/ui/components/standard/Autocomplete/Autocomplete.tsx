"use client";

import { BaseAutocomplete, BaseField } from "../../base";

export interface AutocompleteProps<ItemValue>
  extends
    Omit<BaseAutocomplete.Root.Props<ItemValue>, "items">,
    Pick<BaseField.Root.Props, "dirty" | "touched" | "invalid"> {
  items: readonly ItemValue[];
  getItemLabel?: (item: ItemValue) => React.ReactNode;
  getItemKey?: (item: ItemValue) => React.Key;
  label?: React.ReactNode;
  errors?: { message?: string }[];
  description?: React.ReactNode;
  placeholder?: string;
  emptyMessage?: React.ReactNode;
  slotProps?: {
    root?: Partial<
      Omit<BaseField.Root.Props, "children" | "dirty" | "touched" | "invalid">
    >;
    label?: Partial<Omit<BaseField.Label.Props, "children">>;
    error?: Partial<Omit<BaseField.Error.Props, "error">>;
    description?: Partial<Omit<BaseField.Description.Props, "children">>;

    control?: Partial<BaseField.Control.Props>;
    input?: Partial<BaseAutocomplete.Input.Props>;
    portal?: Partial<Omit<BaseAutocomplete.Portal.Props, "children">>;
    positioner?: Partial<Omit<BaseAutocomplete.Positioner.Props, "children">>;
    popup?: Partial<Omit<BaseAutocomplete.Popup.Props, "children">>;
    empty?: Partial<Omit<BaseAutocomplete.Empty.Props, "children">>;
    list?: Partial<Omit<BaseAutocomplete.List.Props, "children">>;
    item?: Partial<Omit<BaseAutocomplete.Item.Props, "value" | "children">>;
  };
}

export function Autocomplete<ItemValue>({
  items,
  getItemLabel,
  getItemKey,
  label,
  errors,
  description,
  placeholder,
  emptyMessage = "No results.",
  disabled,
  dirty,
  touched,
  invalid,
  slotProps,
  ...props
}: AutocompleteProps<ItemValue>) {
  const isInvalid = invalid || !!errors?.length;
  const renderLabel =
    getItemLabel ?? ((item: ItemValue) => item as React.ReactNode);

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

      <BaseAutocomplete.Root items={items} disabled={disabled} {...props}>
        <BaseField.Control
          {...slotProps?.control}
          render={
            <BaseAutocomplete.Input
              placeholder={placeholder}
              aria-invalid={isInvalid || undefined}
              {...slotProps?.input}
            />
          }
        />

        <BaseAutocomplete.Portal {...slotProps?.portal}>
          <BaseAutocomplete.Positioner {...slotProps?.positioner}>
            <BaseAutocomplete.Popup {...slotProps?.popup}>
              <BaseAutocomplete.Empty {...slotProps?.empty}>
                {emptyMessage}
              </BaseAutocomplete.Empty>

              <BaseAutocomplete.List {...slotProps?.list}>
                {(item: ItemValue, index: number) => (
                  <BaseAutocomplete.Item
                    key={getItemKey?.(item) ?? index}
                    value={item}
                    {...slotProps?.item}
                  >
                    {renderLabel(item)}
                  </BaseAutocomplete.Item>
                )}
              </BaseAutocomplete.List>
            </BaseAutocomplete.Popup>
          </BaseAutocomplete.Positioner>
        </BaseAutocomplete.Portal>
      </BaseAutocomplete.Root>

      <BaseField.Error errors={errors} {...slotProps?.error} />

      {description && (
        <BaseField.Description {...slotProps?.description}>
          {description}
        </BaseField.Description>
      )}
    </BaseField.Root>
  );
}

"use client";

import { Mail, Search, X } from "lucide-react";
import { useRef, useState } from "react";

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
  /**
   * Renders a clear (X) button on the trailing edge that empties the input.
   * Defaults to `true` when `type="search"`.
   */
  clearable?: boolean;
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
    clearButton?: Partial<Omit<BaseInputGroup.Button.Props, "children">>;
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
  clearable,
  slotProps,
  ...props
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const forwardedRef = (props as { ref?: React.Ref<HTMLInputElement> }).ref;

  const type = props.type;
  const isSearch = type === "search";
  const isClearable = clearable ?? isSearch;

  const isControlled = props.value !== undefined;
  const [uncontrolledHasValue, setUncontrolledHasValue] = useState(
    () => String(props.defaultValue ?? "").length > 0,
  );
  const hasValue = isControlled
    ? String(props.value ?? "").length > 0
    : uncontrolledHasValue;

  const setInputRef = (node: HTMLInputElement | null) => {
    inputRef.current = node;
    if (typeof forwardedRef === "function") {
      forwardedRef(node);
    } else if (forwardedRef) {
      forwardedRef.current = node;
    }
  };

  const handleChange: NonNullable<BaseInputProps["onChange"]> = (event) => {
    if (!isControlled) {
      setUncontrolledHasValue(event.currentTarget.value.length > 0);
    }
    props.onChange?.(event);
  };

  const handleClear = () => {
    const input = inputRef.current;
    if (!input) return;

    // Set the value through the native setter so React's onChange fires,
    // keeping both controlled and uncontrolled inputs in sync.
    Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      "value",
    )?.set?.call(input, "");
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.focus();
  };

  const typeIcon = type === "email" ? <Mail /> : isSearch ? <Search /> : null;
  const startContent = startAddon ?? typeIcon;
  const showClear = isClearable && hasValue && !disabled;
  const useGroup = !!(startContent || endAddon || isClearable);

  const controlProps = isClearable ? { onChange: handleChange } : {};

  const renderControl = () => {
    if (!useGroup) {
      return (
        <BaseField.Control
          render={
            <BaseInput
              {...props}
              {...controlProps}
              disabled={disabled}
              ref={setInputRef}
            />
          }
          {...slotProps?.control}
        />
      );
    }

    return (
      <BaseInputGroup.Root {...slotProps?.inbputGroup}>
        {startContent && (
          <BaseInputGroup.Addon align="inline-start" {...slotProps?.startAddon}>
            {startContent}
          </BaseInputGroup.Addon>
        )}

        <BaseField.Control
          render={
            <BaseInputGroup.Input
              {...props}
              {...controlProps}
              disabled={disabled}
              ref={setInputRef}
              data-slot="input-group-control"
            />
          }
          {...slotProps?.control}
        />

        {(endAddon || showClear) && (
          <BaseInputGroup.Addon align="inline-end" {...slotProps?.endAddon}>
            {endAddon}

            {showClear && (
              <BaseInputGroup.Button
                variant="ghost"
                size="icon-xs"
                aria-label="Clear"
                disabled={disabled}
                onClick={handleClear}
                {...slotProps?.clearButton}
              >
                <X className="pointer-events-none" />
              </BaseInputGroup.Button>
            )}
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

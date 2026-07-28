"use client";

import { ChevronDown, X } from "lucide-react";

import { cn, cnState } from "~/ui/utils";

import { BaseCombobox, BaseInputGroup } from "../../../base";

export interface ComboboxInputSingleProps extends BaseInputGroup.Root.Props {
  placeholder?: string;
  slotProps?: {
    input?: Partial<BaseCombobox.Input.Props>;
    inputAddon?: Partial<BaseInputGroup.Addon.Props>;
    inputChevronButton?: Partial<BaseInputGroup.Button.Props>;
    inputChevronIcon?: React.ComponentProps<typeof ChevronDown>;
    inputClearButton?: Partial<BaseCombobox.Clear.Props>;
    inputClearIcon?: React.ComponentProps<typeof X>;
  };
}

export function ComboboxInputSingle({
  placeholder,
  slotProps,
  className,
  ...props
}: ComboboxInputSingleProps) {
  return (
    <BaseInputGroup.Root {...props} className={cn("w-auto", className)}>
      <BaseCombobox.Input
        placeholder={placeholder}
        render={<BaseInputGroup.Input />}
        {...slotProps?.input}
      />

      <BaseInputGroup.Addon align="inline-end" {...slotProps?.inputAddon}>
        <BaseInputGroup.Button
          size="icon-xs"
          variant="ghost"
          render={<BaseCombobox.Trigger />}
          {...slotProps?.inputChevronButton}
          className={cnState(
            `group-has-data-[slot=combobox-clear]/input-group:hidden
            data-pressed:bg-transparent`,
            slotProps?.inputChevronButton?.className,
          )}
        >
          <ChevronDown {...slotProps?.inputChevronIcon} />
        </BaseInputGroup.Button>

        <BaseCombobox.Clear {...slotProps?.inputClearButton}>
          <X {...slotProps?.inputClearIcon} />
        </BaseCombobox.Clear>
      </BaseInputGroup.Addon>
    </BaseInputGroup.Root>
  );
}

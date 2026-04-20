"use client";

import { CheckIcon, ChevronDown, X } from "lucide-react";

import { BaseCombobox, BaseInputGroup } from "~/ui/components/base";

const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
] as const;

export function ComboboxBasic() {
  return (
    <BaseCombobox.Root items={frameworks}>
      <BaseInputGroup.Root className="w-full max-w-2xs">
        <BaseCombobox.Input
          placeholder="Select a framework"
          render={<BaseInputGroup.Input />}
        />

        <BaseInputGroup.Addon align="inline-end">
          <BaseInputGroup.Button
            size="icon-xs"
            variant="ghost"
            render={<BaseCombobox.Trigger />}
            className="group-has-data-[slot=combobox-clear]/input-group:hidden
              data-pressed:bg-transparent"
          >
            <ChevronDown />
          </BaseInputGroup.Button>

          <BaseCombobox.Clear>
            <X />
          </BaseCombobox.Clear>
        </BaseInputGroup.Addon>
      </BaseInputGroup.Root>

      <BaseCombobox.Portal>
        <BaseCombobox.Positioner>
          <BaseCombobox.Popup extraWidth>
            <BaseCombobox.Empty>No items found.</BaseCombobox.Empty>
            <BaseCombobox.List
              children={(item: string) => (
                <BaseCombobox.Item key={item} value={item}>
                  {item}

                  <BaseCombobox.ItemIndicator>
                    <CheckIcon />
                  </BaseCombobox.ItemIndicator>
                </BaseCombobox.Item>
              )}
            />
          </BaseCombobox.Popup>
        </BaseCombobox.Positioner>
      </BaseCombobox.Portal>
    </BaseCombobox.Root>
  );
}

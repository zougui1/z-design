"use client";

import { CheckIcon } from "lucide-react";
import { Fragment } from "react/jsx-runtime";

import { BaseCombobox } from "~/ui/components/base";

const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
] as const;

export function ComboboxMultiple() {
  const anchor = BaseCombobox.useAnchor();

  return (
    <BaseCombobox.Root
      multiple
      autoHighlight
      items={frameworks}
      defaultValue={[frameworks[0]]}
    >
      <BaseCombobox.Chips ref={anchor} className="w-full max-w-2xs">
        <BaseCombobox.Value
          children={(values: string[]) => (
            <Fragment>
              {values.map((value: string) => (
                <BaseCombobox.Chip key={value}>{value}</BaseCombobox.Chip>
              ))}

              <BaseCombobox.ChipsInput />
            </Fragment>
          )}
        />
      </BaseCombobox.Chips>

      <BaseCombobox.Portal>
        <BaseCombobox.Positioner anchor={anchor}>
          <BaseCombobox.Popup>
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

"use client";

import { Trash2Icon } from "lucide-react";
import { Dialog, Select } from "~/ui/components";
import { ZScrollArea } from "~/ui/components/standard";

const items = [
  { label: "Select framework", value: null },
  { label: "React", value: "react" },
  { label: "Angular", value: "angular" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
  { label: "Ember", value: "ember", disabled: true },
  {
    label: "Erase reality",
    value: "erase-reality",
    variant: "destructive" as const,
    icon: <Trash2Icon />,
  },
  { label: "Jquery", value: "jquery" },
  { label: "Backbone", value: "backbone" },
  { label: "Nestjs", value: "nestjs" },
  { label: "Nextjs", value: "nextjs" },
  { label: "Remix", value: "remix" },
];
const variants = ["solid", "transparent", "outline"] as const;

export function Test() {
  return (
    <div className="flex gap-4">
      {variants.map((variant) => (
        <Dialog.Root key={variant}>
          <Select.Root items={items}>
            <Dialog.Trigger render={<Select.Trigger variant={variant} />}>
              <Select.Value />
            </Dialog.Trigger>

            <Dialog.Content
              variant={variant}
              hideCloseButton
              className="p-2"
              children={({ close }) => (
                <ZScrollArea className="flex flex-col gap-2" vertical>
                  {items.map((item) => (
                    <Select.Item
                      key={item.label}
                      value={item.value}
                      disabled={item.disabled}
                      variant={item.variant}
                      icon={item.icon}
                      onClick={close}
                      indicatorPosition="start"
                    >
                      {item.label}
                    </Select.Item>
                  ))}
                </ZScrollArea>
              )}
            />
          </Select.Root>
        </Dialog.Root>
      ))}
    </div>
  );
}

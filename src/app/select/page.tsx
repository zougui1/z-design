import { Trash2Icon } from "lucide-react";
import { Container, Dialog, Select } from "~/ui/components";
import { Test } from "../_test";

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
];
const variants = ["solid", "transparent", "outline"] as const;

export default function HomePage() {
  return (
    <Container>
      <div className="mt-2 flex flex-col gap-8">
        <div className="flex gap-4">
          {variants.map((variant) => (
            <Select.Root key={variant} items={items}>
              <Select.Trigger variant={variant}>
                <Select.Value />
              </Select.Trigger>

              <Select.Content sideOffset={8} variant={variant}>
                {items.map((item) => (
                  <Select.Item
                    key={item.label}
                    value={item.value}
                    disabled={item.disabled}
                    variant={item.variant}
                    icon={item.icon}
                  >
                    {item.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          ))}
        </div>

        <div className="flex gap-4">
          {variants.map((variant) => (
            <Select.Root key={variant} items={items}>
              <Select.Trigger variant={variant} blur>
                <Select.Value />
              </Select.Trigger>

              <Select.Content sideOffset={8} variant={variant} blur>
                {items.map((item) => (
                  <Select.Item
                    key={item.label}
                    value={item.value}
                    disabled={item.disabled}
                    variant={item.variant}
                    icon={item.icon}
                  >
                    {item.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          ))}
        </div>

        <div className="flex gap-4">
          {variants.map((variant) => (
            <Select.Root key={variant} items={items}>
              <Select.Trigger aria-invalid variant={variant}>
                <Select.Value />
              </Select.Trigger>

              <Select.Content sideOffset={8} variant={variant}>
                {items.map((item) => (
                  <Select.Item
                    key={item.label}
                    value={item.value}
                    disabled={item.disabled}
                    variant={item.variant}
                    icon={item.icon}
                  >
                    {item.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          ))}
        </div>

        <div className="flex gap-4">
          {variants.map((variant) => (
            <Select.Root key={variant} items={items} disabled>
              <Select.Trigger variant={variant}>
                <Select.Value />
              </Select.Trigger>

              <Select.Content sideOffset={8} variant={variant}>
                {items.map((item) => (
                  <Select.Item
                    key={item.label}
                    value={item.value}
                    disabled={item.disabled}
                    variant={item.variant}
                    icon={item.icon}
                  >
                    {item.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          ))}
        </div>

        <div className="flex gap-4">
          {variants.map((variant) => (
            <Select.Root key={variant} items={items} disabled>
              <Select.Trigger variant={variant} blur>
                <Select.Value />
              </Select.Trigger>

              <Select.Content sideOffset={8} variant={variant} blur>
                {items.map((item) => (
                  <Select.Item
                    key={item.label}
                    value={item.value}
                    disabled={item.disabled}
                    variant={item.variant}
                    icon={item.icon}
                  >
                    {item.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          ))}
        </div>

        <div className="flex gap-4">
          {variants.map((variant) => (
            <Select.Root key={variant} items={items} disabled>
              <Select.Trigger aria-invalid variant={variant}>
                <Select.Value />
              </Select.Trigger>

              <Select.Content sideOffset={8} variant={variant}>
                {items.map((item) => (
                  <Select.Item
                    key={item.label}
                    value={item.value}
                    disabled={item.disabled}
                    variant={item.variant}
                    icon={item.icon}
                  >
                    {item.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          ))}
        </div>

        <Test />
      </div>
    </Container>
  );
}

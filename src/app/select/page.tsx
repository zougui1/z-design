import { Trash2Icon } from "lucide-react";
import { Container, Select, Typography } from "~/ui/components";
import { Test } from "./_test";
import { cn } from "~/ui/utils";

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

const renderItems = () => {
  return items.map((item) => (
    <Select.Item
      key={item.label}
      value={item.value}
      disabled={item.disabled}
      variant={item.variant}
      icon={item.icon}
    >
      {item.label}
    </Select.Item>
  ));
};

const colors = [
  "default",
  "neutral",
  "primary",
  "secondary",
  "success",
  "warning",
  "destructive",
  "info",
] as const;

const Section = ({
  title,
  children,
  className,
}: {
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="space-y-4">
      {title && <Typography.H2>{title}</Typography.H2>}

      <div className={cn("flex flex-wrap gap-5", className)}>{children}</div>
    </div>
  );
};

export default function HomePage() {
  return (
    <Container className="flex flex-col gap-8">
      <div className="mt-2 flex flex-col gap-8">
        <Section title="Select">
          {colors.map((color) => (
            <Select.Root key={color} value="react">
              <Select.Trigger color={color} className="w-[25ch]">
                <Select.Value />
              </Select.Trigger>

              <Select.Content>{renderItems()}</Select.Content>
            </Select.Root>
          ))}
        </Section>

        <Section title="Disabled">
          {colors.map((color) => (
            <Select.Root key={color} items={items} disabled>
              <Select.Trigger color={color} className="w-[25ch]">
                <Select.Value />
              </Select.Trigger>

              <Select.Content>{renderItems()}</Select.Content>
            </Select.Root>
          ))}
        </Section>

        <Section title="Invalid">
          {colors.map((color) => (
            <Select.Root key={color} items={items}>
              <Select.Trigger aria-invalid color={color} className="w-[25ch]">
                <Select.Value />
              </Select.Trigger>

              <Select.Content>{renderItems()}</Select.Content>
            </Select.Root>
          ))}
        </Section>

        <Section title="Dialog popup">
          <Test />
        </Section>
      </div>
    </Container>
  );
}

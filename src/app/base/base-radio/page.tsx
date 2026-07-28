"use client";

import { BaseRadio, Container, Typography } from "~/ui/components";
import { cn } from "~/ui/utils";

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
    <div className="flex flex-col gap-4">
      {title && <Typography.H2>{title}</Typography.H2>}

      <div className={cn("flex flex-wrap gap-5", className)}>{children}</div>
    </div>
  );
};

const Row = ({ children }: { children?: React.ReactNode }) => {
  return <div className="flex flex-wrap gap-2">{children}</div>;
};

const items = [
  { label: "Comfortable", value: "comfortable" },
  { label: "Compact", value: "compact" },
  { label: "Spacious (disabled)", value: "spacious", disabled: true },
];

export default function BaseRadioPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BaseRadio">
          <BaseRadio.Group defaultValue="comfortable">
            {items.map((item) => (
              <label
                key={item.value}
                className="flex w-fit items-center gap-2 text-sm has-data-disabled:opacity-50"
              >
                <BaseRadio.Root value={item.value} disabled={item.disabled}>
                  <BaseRadio.Indicator />
                </BaseRadio.Root>
                {item.label}
              </label>
            ))}
          </BaseRadio.Group>
        </Section>

        <Section title="Horizontal">
          <BaseRadio.Group
            defaultValue="compact"
            className="flex flex-row gap-5"
          >
            {items.slice(0, 2).map((item) => (
              <label
                key={item.value}
                className="flex w-fit items-center gap-2 text-sm"
              >
                <BaseRadio.Root value={item.value}>
                  <BaseRadio.Indicator />
                </BaseRadio.Root>
                {item.label}
              </label>
            ))}
          </BaseRadio.Group>
        </Section>
      </div>
    </Container>
  );
}

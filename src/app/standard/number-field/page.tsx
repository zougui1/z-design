"use client";

import { useState } from "react";

import { NumberField } from "~/ui/components";
import { Container, Typography } from "~/ui/components/base";

const Section = ({
  title,
  children,
}: {
  title?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-4">
      {title && <Typography.H2>{title}</Typography.H2>}
      <div className="flex max-w-xs flex-col gap-6">{children}</div>
    </div>
  );
};

export default function NumberFieldPage() {
  const [value, setValue] = useState<number | null>(5);

  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="NumberField">
          <NumberField
            label="Quantity"
            value={value}
            onValueChange={setValue}
            min={0}
            max={100}
            description="Between 0 and 100."
          />

          <NumberField
            label="Price"
            defaultValue={9.99}
            step={0.01}
            format={{ style: "currency", currency: "USD" }}
          />

          <NumberField
            label="With error"
            defaultValue={0}
            errors={[{ message: "Must be greater than 0." }]}
          />

          <NumberField label="Disabled" defaultValue={42} disabled />
        </Section>
      </div>
    </Container>
  );
}

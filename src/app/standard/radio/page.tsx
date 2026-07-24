"use client";

import { useState } from "react";

import { Container, RadioGroup, Typography } from "~/ui/components";

const items = [
  { label: "Comfortable", value: "comfortable" },
  { label: "Compact", value: "compact" },
  { label: "Spacious (disabled)", value: "spacious", disabled: true },
];

export default function RadioPage() {
  const [value, setValue] = useState<string>("comfortable");

  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2>Radio Group</Typography.H2>
          <RadioGroup
            items={items}
            value={value}
            onValueChange={(next) => setValue(next as string)}
          />
          <p className="text-muted-foreground text-sm">Selected: {value}</p>
        </div>

        <div className="flex flex-col gap-4">
          <Typography.H2>Horizontal</Typography.H2>
          <RadioGroup
            items={items.slice(0, 2)}
            defaultValue="compact"
            className="flex flex-row gap-5"
          />
        </div>
      </div>
    </Container>
  );
}

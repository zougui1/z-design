"use client";

import { useState } from "react";

import { Container, Slider, Typography } from "~/ui/components";

export default function SliderPage() {
  const [value, setValue] = useState(40);
  const [range, setRange] = useState<number[]>([25, 75]);

  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2>Slider</Typography.H2>
          <Slider
            className="w-80"
            label="Volume"
            showValue
            value={value}
            onValueChange={(next) => setValue(next as number)}
          />
        </div>

        <div className="flex flex-col gap-4">
          <Typography.H2>Range</Typography.H2>
          <Slider
            className="w-80"
            label="Price"
            showValue
            value={range}
            onValueChange={(next) => setRange(next as number[])}
          />
        </div>

        <div className="flex flex-col gap-4">
          <Typography.H2>Disabled</Typography.H2>
          <Slider className="w-80" defaultValue={50} disabled />
        </div>
      </div>
    </Container>
  );
}

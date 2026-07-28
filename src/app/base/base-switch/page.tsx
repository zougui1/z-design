"use client";

import { BaseSwitch, Container, Typography } from "~/ui/components";

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

export default function BaseSwitchPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2>BaseSwitch</Typography.H2>
          <Typography.Muted>
            Composed from <code>BaseSwitch.Root</code> and{" "}
            <code>BaseSwitch.Thumb</code>.
          </Typography.Muted>

          <div className="flex flex-col gap-3">
            {colors.map((color) => (
              <div key={color} className="flex items-center gap-3">
                <span className="text-muted-foreground w-24 text-sm capitalize">
                  {color}
                </span>
                <BaseSwitch.Root color={color} defaultChecked>
                  <BaseSwitch.Thumb color={color} />
                </BaseSwitch.Root>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

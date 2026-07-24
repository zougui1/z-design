"use client";

import { useState } from "react";

import { Container, Switch, Typography } from "~/ui/components";

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

export default function SwitchPage() {
  const [checked, setChecked] = useState(true);

  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2>Switch</Typography.H2>

          <div className="flex items-center gap-3">
            <Switch checked={checked} onCheckedChange={setChecked} />
            <span className="text-muted-foreground text-sm">
              {checked ? "On" : "Off"}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Typography.H2>Colors</Typography.H2>
          <div className="flex flex-col gap-3">
            {colors.map((color) => (
              <div key={color} className="flex items-center gap-3">
                <span className="text-muted-foreground w-24 text-sm capitalize">
                  {color}
                </span>
                <Switch color={color} defaultChecked />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Typography.H2>Disabled</Typography.H2>
          <div className="flex gap-3">
            <Switch disabled />
            <Switch disabled defaultChecked />
          </div>
        </div>
      </div>
    </Container>
  );
}

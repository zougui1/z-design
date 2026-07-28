"use client";

import { BoldIcon, StarIcon } from "lucide-react";
import { useState } from "react";

import { Container, Toggle, Typography } from "~/ui/components";

export default function TogglePage() {
  const [pressed, setPressed] = useState(false);

  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2>Toggle</Typography.H2>
          <div className="flex flex-wrap items-center gap-3">
            <Toggle aria-label="Toggle bold">
              <BoldIcon />
            </Toggle>
            <Toggle variant="outline">Outline</Toggle>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Typography.H2>Controlled</Typography.H2>
          <Toggle
            variant="outline"
            pressed={pressed}
            onPressedChange={setPressed}
          >
            <StarIcon />
            {pressed ? "Favorited" : "Favorite"}
          </Toggle>
        </div>
      </div>
    </Container>
  );
}

"use client";

import { useState } from "react";

import { Calendar } from "~/ui/components";
import { Container, Typography } from "~/ui/components/base";

export default function CalendarPage() {
  const [selected, setSelected] = useState<Date | undefined>(undefined);

  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2>Calendar</Typography.H2>
          <div className="border-border w-fit rounded-md border">
            <Calendar
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

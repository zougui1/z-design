"use client";

import { useState } from "react";

import { BaseCalendar, Container, Typography } from "~/ui/components";

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
      <div className="flex flex-wrap gap-8">{children}</div>
    </div>
  );
};

export default function BaseCalendarPage() {
  const [selected, setSelected] = useState<Date | undefined>(undefined);

  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BaseCalendar — single">
          <div className="border-border w-fit rounded-md border">
            <BaseCalendar
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
          </div>
        </Section>

        <Section title="Two months">
          <div className="border-border w-fit rounded-md border">
            <BaseCalendar mode="single" numberOfMonths={2} />
          </div>
        </Section>
      </div>
    </Container>
  );
}

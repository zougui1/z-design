"use client";

import { useState } from "react";

import { TimeInput, Container, Typography } from "~/ui/components";

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
      <div className="flex max-w-sm flex-col gap-6">{children}</div>
    </div>
  );
};

const at = (hours: number, minutes: number, seconds = 0) => {
  const date = new Date();
  date.setHours(hours, minutes, seconds, 0);
  return date;
};

export default function TimeInputPage() {
  const [time, setTime] = useState<Date | undefined>(() => at(9, 30));

  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="TimeInput">
          <TimeInput
            label="Start time"
            value={time}
            onValueChange={setTime}
            description="24-hour time."
          />

          <TimeInput
            label="With seconds"
            withSeconds
            defaultValue={at(12, 0, 0)}
          />

          <TimeInput label="No icon" startAddon={null} />

          <TimeInput
            label="With error"
            errors={[{ message: "A time is required." }]}
          />

          <TimeInput label="Disabled" disabled defaultValue={at(8, 0)} />
        </Section>
      </div>
    </Container>
  );
}

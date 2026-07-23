"use client";

import { useState } from "react";

import { DatePicker, Container, Typography } from "~/ui/components";

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

export default function DatePickerPage() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="DatePicker">
          <DatePicker
            label="Date of birth"
            value={date}
            onValueChange={setDate}
            description="Select your date of birth."
          />

          <DatePicker label="Uncontrolled" placeholder="Choose a day" />

          <DatePicker
            label="With error"
            errors={[{ message: "A date is required." }]}
          />
        </Section>
      </div>
    </Container>
  );
}

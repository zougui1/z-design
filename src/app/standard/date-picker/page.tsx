"use client";

import { useState } from "react";

import {
  DatePicker,
  DateRangePicker,
  type DateRange,
  Container,
  Typography,
} from "~/ui/components";

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
  const [range, setRange] = useState<DateRange | undefined>(undefined);

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

        <Section title="With time">
          <DatePicker
            label="Appointment"
            withTime
            description="Pick a day and a time."
          />

          <DatePicker
            label="With seconds"
            withTime
            timeStep="seconds"
          />
        </Section>

        <Section title="Clearable">
          <DatePicker
            label="Clearable"
            clearable
            defaultValue={new Date()}
            description="A Clear button appears in the popup while a date is selected."
          />

          <DatePicker
            label="Clearable with time"
            clearable
            withTime
            defaultValue={new Date()}
          />
        </Section>

        <Section title="DateRangePicker">
          <DateRangePicker
            label="Stay"
            value={range}
            onValueChange={setRange}
            description="Select a check-in and check-out date."
          />

          <DateRangePicker label="Uncontrolled" placeholder="Choose a range" />

          <DateRangePicker
            label="Clearable"
            clearable
            description="A Clear button appears in the popup while a range is selected."
          />

          <DateRangePicker
            label="With error"
            errors={[{ message: "A date range is required." }]}
          />

          <DateRangePicker label="Two months" numberOfMonths={2} />
        </Section>
      </div>
    </Container>
  );
}

"use client";

import { Container, RelativeTime, Typography } from "~/ui/components";

const Row = ({
  label,
  children,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="flex items-center justify-between gap-4">
    <span className="text-muted-foreground text-sm">{label}</span>
    <span className="text-sm font-medium">{children}</span>
  </div>
);

const Section = ({
  title,
  children,
}: {
  title?: React.ReactNode;
  children?: React.ReactNode;
}) => (
  <div className="flex flex-col gap-4">
    {title && <Typography.H2>{title}</Typography.H2>}
    <div className="flex max-w-md flex-col gap-3">{children}</div>
  </div>
);

const now = Date.now();
const seconds = (n: number) => new Date(now - n * 1_000);
const minutes = (n: number) => new Date(now - n * 60_000);
const hours = (n: number) => new Date(now - n * 3_600_000);
const days = (n: number) => new Date(now - n * 86_400_000);

export default function RelativeTimePage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="RelativeTime">
          <Row label="5 seconds ago (min unit: second)">
            <RelativeTime value={seconds(5)} minUnit="second" />
          </Row>
          <Row label="30 seconds ago (default)">
            <RelativeTime value={seconds(30)} />
          </Row>
          <Row label="24 minutes ago">
            <RelativeTime value={minutes(24)} />
          </Row>
          <Row label="6 hours ago">
            <RelativeTime value={hours(6)} />
          </Row>
          <Row label="3 days ago">
            <RelativeTime value={days(3)} />
          </Row>
          <Row label="In 2 days">
            <RelativeTime value={days(-2)} />
          </Row>
        </Section>

        <Section title="Compound (maxUnits)">
          <Row label="maxUnits: 3, minUnit: minute">
            <RelativeTime
              value={new Date(now - 200 * 86_400_000 - 5 * 3_600_000)}
              maxUnits={3}
              minUnit="minute"
            />
          </Row>
          <Row label="maxUnit: day">
            <RelativeTime value={days(876)} maxUnit="day" />
          </Row>
        </Section>

        <Section title="Live refresh">
          <Typography.Muted className="text-sm">
            Refreshes on an interval derived from the smallest rendered unit:
            seconds → 1s, minutes → 10s, hours → 1min, days → 1h, larger → 1 day.
          </Typography.Muted>
          <Row label="Ticking every second">
            <RelativeTime value={seconds(1)} minUnit="second" />
          </Row>
          <Row label="Static (live disabled)">
            <RelativeTime value={minutes(24)} live={false} />
          </Row>
        </Section>
      </div>
    </Container>
  );
}

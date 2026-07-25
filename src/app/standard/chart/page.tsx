"use client";

import {
  AreaChart,
  BarChart,
  Card,
  type ChartConfig,
  Container,
  LineChart,
  PieChart,
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
      <div className="grid gap-6 md:grid-cols-2">{children}</div>
    </div>
  );
};

const monthly = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 173, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 264, mobile: 140 },
];

const seriesConfig = {
  desktop: { label: "Desktop" },
  mobile: { label: "Mobile" },
} satisfies ChartConfig;

const browsers = [
  { browser: "chrome", visitors: 275 },
  { browser: "safari", visitors: 200 },
  { browser: "firefox", visitors: 187 },
  { browser: "edge", visitors: 173 },
  { browser: "other", visitors: 90 },
];

const browserConfig = {
  visitors: { label: "Visitors" },
  chrome: { label: "Chrome" },
  safari: { label: "Safari" },
  firefox: { label: "Firefox" },
  edge: { label: "Edge" },
  other: { label: "Other" },
} satisfies ChartConfig;

const shortMonth = (value: string) => value.slice(0, 3);

export default function ChartPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="Chart">
          <Card title="Area" description="Stacked area — one line of markup.">
            <AreaChart
              data={monthly}
              config={seriesConfig}
              dataKey="month"
              stacked
              tickFormatter={shortMonth}
            />
          </Card>

          <Card title="Bar" description="Grouped bars from the same config.">
            <BarChart
              data={monthly}
              config={seriesConfig}
              dataKey="month"
              tickFormatter={shortMonth}
            />
          </Card>

          <Card
            title="Line"
            description="Fills its card via the container slot."
            slotProps={{ content: { className: "min-h-64 flex-1" } }}
          >
            <LineChart
              data={monthly}
              config={seriesConfig}
              dataKey="month"
              yAxis
              tickFormatter={shortMonth}
              slotProps={{
                container: { className: "aspect-auto h-full w-full" },
              }}
            />
          </Card>

          <Card
            title="Donut"
            description="Per-slice colors resolved from the config."
            slotProps={{
              content: {
                className: "flex min-h-64 flex-1 items-center justify-center",
              },
            }}
          >
            <PieChart
              data={browsers}
              config={browserConfig}
              dataKey="visitors"
              nameKey="browser"
              className="h-full w-auto"
            />
          </Card>
        </Section>
      </div>
    </Container>
  );
}

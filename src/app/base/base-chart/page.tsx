"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";

import { BaseChart, Card, Container, Typography } from "~/ui/components";

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

// A `ChartConfig` maps each series key to a label, an icon and a color. Colors
// resolve to CSS variables so they follow the theme (and dark mode) for free.
const seriesConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
} satisfies BaseChart.Config;

const browsers = [
  { browser: "chrome", visitors: 275, fill: "var(--chart-1)" },
  { browser: "safari", visitors: 200, fill: "var(--chart-2)" },
  { browser: "firefox", visitors: 187, fill: "var(--chart-3)" },
  { browser: "edge", visitors: 173, fill: "var(--chart-4)" },
  { browser: "other", visitors: 90, fill: "var(--chart-5)" },
];

const browserConfig = {
  visitors: { label: "Visitors" },
  chrome: { label: "Chrome", color: "var(--chart-1)" },
  safari: { label: "Safari", color: "var(--chart-2)" },
  firefox: { label: "Firefox", color: "var(--chart-3)" },
  edge: { label: "Edge", color: "var(--chart-4)" },
  other: { label: "Other", color: "var(--chart-5)" },
} satisfies BaseChart.Config;

export default function BaseChartPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="Base Chart">
          <Card
            title="Area"
            description="Compose recharts freely inside the primitives."
          >
            <BaseChart.Container config={seriesConfig}>
              <AreaChart data={monthly} margin={{ left: 12, right: 12 }}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value: string) => value.slice(0, 3)}
                />
                <BaseChart.Tooltip
                  content={<BaseChart.TooltipContent indicator="dot" />}
                />
                <BaseChart.Legend content={<BaseChart.LegendContent />} />
                <Area
                  dataKey="mobile"
                  type="natural"
                  stackId="a"
                  fill="var(--color-mobile)"
                  fillOpacity={0.4}
                  stroke="var(--color-mobile)"
                />
                <Area
                  dataKey="desktop"
                  type="natural"
                  stackId="a"
                  fill="var(--color-desktop)"
                  fillOpacity={0.4}
                  stroke="var(--color-desktop)"
                />
              </AreaChart>
            </BaseChart.Container>
          </Card>

          <Card title="Bar" description="Grouped bars with a custom tooltip.">
            <BaseChart.Container config={seriesConfig}>
              <BarChart data={monthly}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value: string) => value.slice(0, 3)}
                />
                <BaseChart.Tooltip content={<BaseChart.TooltipContent />} />
                <BaseChart.Legend content={<BaseChart.LegendContent />} />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
              </BarChart>
            </BaseChart.Container>
          </Card>

          <Card
            title="Line"
            description="Multi-series line chart."
            slotProps={{ content: { className: "min-h-64 flex-1" } }}
          >
            <BaseChart.Container
              config={seriesConfig}
              className="aspect-auto h-full w-full"
            >
              <LineChart data={monthly} margin={{ left: 12, right: 12 }}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value: string) => value.slice(0, 3)}
                />
                <YAxis tickLine={false} axisLine={false} width={32} />
                <BaseChart.Tooltip
                  content={<BaseChart.TooltipContent indicator="line" />}
                />
                <Line
                  dataKey="desktop"
                  type="monotone"
                  stroke="var(--color-desktop)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  dataKey="mobile"
                  type="monotone"
                  stroke="var(--color-mobile)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </BaseChart.Container>
          </Card>

          <Card
            title="Donut"
            description="Pie chart with per-slice colors."
            slotProps={{
              content: {
                className: "flex min-h-64 flex-1 items-center justify-center",
              },
            }}
          >
            <BaseChart.Container
              config={browserConfig}
              className="aspect-square h-full w-auto"
            >
              <PieChart>
                <BaseChart.Tooltip
                  content={
                    <BaseChart.TooltipContent nameKey="browser" hideLabel />
                  }
                />
                <Pie
                  data={browsers}
                  dataKey="visitors"
                  nameKey="browser"
                  innerRadius="65%"
                  outerRadius="90%"
                  strokeWidth={5}
                >
                  {browsers.map((entry) => (
                    <Cell key={entry.browser} fill={entry.fill} />
                  ))}
                </Pie>
                <BaseChart.Legend
                  content={
                    <BaseChart.LegendContent
                      nameKey="browser"
                      className="flex-wrap"
                    />
                  }
                />
              </PieChart>
            </BaseChart.Container>
          </Card>
        </Section>
      </div>
    </Container>
  );
}

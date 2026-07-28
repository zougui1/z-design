import type * as React from "react";
import type * as RechartsPrimitive from "recharts";

import { BaseChart } from "../../base";

export type ChartConfig = BaseChart.Config;
export type ChartDatum = Record<string, unknown>;

/** Fallback palette used when a series has no explicit color in the config. */
export const CHART_PALETTE = BaseChart.palette;

export function chartHasColor(item: ChartConfig[string] | undefined): boolean {
  if (!item) return false;
  return Boolean(
    ("color" in item && item.color) || ("theme" in item && item.theme),
  );
}

/**
 * Resolve the color for a series key. When the config declares a color the
 * `--color-<key>` variable (set by the container) is used; otherwise a color
 * from the palette is assigned by position so charts render without config.
 */
export function resolveSeriesColor(
  key: string,
  config: ChartConfig,
  index: number,
): string {
  if (chartHasColor(config[key])) {
    return `var(--color-${key})`;
  }
  return CHART_PALETTE[index % CHART_PALETTE.length] ?? CHART_PALETTE[0];
}

export type SeriesInput<Props> = string | ({ key: string } & Props);

/**
 * Normalize a `series` prop into `{ key, props }` pairs. When omitted, every
 * config key becomes a series (in declaration order), each defaulting to a
 * palette color by position. Colors are optional — pass an explicit `series`
 * list to plot only a subset.
 */
export function normalizeSeries<Props>(
  input: readonly SeriesInput<Props>[] | undefined,
  config: ChartConfig,
): Array<{ key: string; props: Props }> {
  const items: readonly SeriesInput<Props>[] =
    input && input.length > 0 ? input : Object.keys(config);

  return items.map((item) => {
    if (typeof item === "string") {
      return { key: item, props: {} as Props };
    }
    const { key, ...props } = item;
    return { key, props: props as Props };
  });
}

/** Props shared by the cartesian charts (Area, Bar, Line). */
export interface CartesianChartProps {
  data: readonly ChartDatum[];
  config: ChartConfig;
  /** dataKey used for the category (X) axis. */
  dataKey: string;
  className?: string;
  /** Show the cartesian grid. Default `true`. */
  grid?: boolean;
  /** Show the X axis. Default `true`. */
  xAxis?: boolean;
  /** Show the Y axis. Default `false`. */
  yAxis?: boolean;
  /** Show the tooltip. Default `true`. */
  tooltip?: boolean;
  /** Show the legend. Default `true`. */
  legend?: boolean;
  /** Stack the series onto a single stack. Default `false`. */
  stacked?: boolean;
  /** Format the category axis ticks. */
  tickFormatter?: (value: string, index: number) => string;
  margin?: { top?: number; right?: number; bottom?: number; left?: number };
  /** Extra recharts elements rendered inside the chart (reference lines…). */
  children?: React.ReactNode;
  slotProps?: CartesianSlotProps;
}

export interface CartesianSlotProps {
  container?: Partial<React.ComponentProps<typeof BaseChart.Container>>;
  grid?: React.ComponentProps<typeof RechartsPrimitive.CartesianGrid>;
  xAxis?: React.ComponentProps<typeof RechartsPrimitive.XAxis>;
  yAxis?: React.ComponentProps<typeof RechartsPrimitive.YAxis>;
  tooltip?: Partial<React.ComponentProps<typeof BaseChart.Tooltip>>;
  tooltipContent?: Partial<
    React.ComponentProps<typeof BaseChart.TooltipContent>
  >;
  legend?: Partial<React.ComponentProps<typeof BaseChart.Legend>>;
  legendContent?: Partial<React.ComponentProps<typeof BaseChart.LegendContent>>;
}

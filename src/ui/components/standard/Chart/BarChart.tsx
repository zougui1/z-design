"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { BaseChart } from "../../base";

import { renderCartesianDecorations } from "./Cartesian";
import {
  type CartesianChartProps,
  type ChartDatum,
  type SeriesInput,
  normalizeSeries,
  resolveSeriesColor,
} from "./types";

type BarElementProps = Omit<
  React.ComponentProps<typeof RechartsPrimitive.Bar>,
  "dataKey"
>;

export interface BarChartProps extends CartesianChartProps {
  /**
   * Series to plot. A string uses the config's color/label; an object allows
   * per-series recharts `Bar` overrides. Defaults to every config key.
   */
  series?: SeriesInput<Partial<BarElementProps>>[];
  /** Corner radius of each bar. Default `4`. */
  radius?: BarElementProps["radius"];
}

export const BarChart = ({
  data,
  config,
  dataKey,
  series,
  className,
  grid = true,
  xAxis = true,
  yAxis = false,
  tooltip = true,
  legend = true,
  stacked = false,
  radius = 4,
  tickFormatter,
  margin,
  children,
  slotProps,
}: BarChartProps) => {
  const items = normalizeSeries(series, config);

  return (
    <BaseChart.Container
      config={config}
      className={className}
      {...slotProps?.container}
    >
      <RechartsPrimitive.BarChart data={data as ChartDatum[]} margin={margin}>
        {renderCartesianDecorations({
          dataKey,
          grid,
          xAxis,
          yAxis,
          tooltip,
          legend,
          tickFormatter,
          tooltipIndicator: "dot",
          slotProps,
        })}

        {items.map((item, index) => (
          <RechartsPrimitive.Bar
            key={item.key}
            dataKey={item.key}
            fill={resolveSeriesColor(item.key, config, index)}
            radius={radius}
            stackId={stacked ? "a" : undefined}
            {...item.props}
          />
        ))}

        {children}
      </RechartsPrimitive.BarChart>
    </BaseChart.Container>
  );
};

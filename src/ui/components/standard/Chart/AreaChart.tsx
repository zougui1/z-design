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

type AreaElementProps = Omit<
  React.ComponentProps<typeof RechartsPrimitive.Area>,
  "dataKey"
>;

export interface AreaChartProps extends CartesianChartProps {
  /**
   * Series to plot. A string uses the config's color/label; an object allows
   * per-series recharts `Area` overrides. Defaults to every config key.
   */
  series?: SeriesInput<Partial<AreaElementProps>>[];
  /** Curve interpolation. Default `"natural"`. */
  type?: AreaElementProps["type"];
  /** Area fill opacity. Default `0.4`. */
  fillOpacity?: number;
}

export const AreaChart = ({
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
  type = "natural",
  fillOpacity = 0.4,
  tickFormatter,
  margin = { left: 12, right: 12 },
  children,
  slotProps,
}: AreaChartProps) => {
  const items = normalizeSeries(series, config);

  return (
    <BaseChart.Container
      config={config}
      className={className}
      {...slotProps?.container}
    >
      <RechartsPrimitive.AreaChart
        data={data as ChartDatum[]}
        margin={margin}
      >
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

        {items.map((item, index) => {
          const color = resolveSeriesColor(item.key, config, index);
          return (
            <RechartsPrimitive.Area
              key={item.key}
              dataKey={item.key}
              type={type}
              stackId={stacked ? "a" : undefined}
              fill={color}
              fillOpacity={fillOpacity}
              stroke={color}
              {...item.props}
            />
          );
        })}

        {children}
      </RechartsPrimitive.AreaChart>
    </BaseChart.Container>
  );
};

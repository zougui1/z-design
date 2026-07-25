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

type LineElementProps = Omit<
  React.ComponentProps<typeof RechartsPrimitive.Line>,
  "dataKey"
>;

export interface LineChartProps extends CartesianChartProps {
  /**
   * Series to plot. A string uses the config's color/label; an object allows
   * per-series recharts `Line` overrides. Defaults to every config key.
   */
  series?: SeriesInput<Partial<LineElementProps>>[];
  /** Curve interpolation. Default `"monotone"`. */
  type?: LineElementProps["type"];
  /** Line thickness. Default `2`. */
  strokeWidth?: LineElementProps["strokeWidth"];
  /** Render a dot at each point. Default `false`. */
  dot?: LineElementProps["dot"];
}

export const LineChart = ({
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
  type = "monotone",
  strokeWidth = 2,
  dot = false,
  tickFormatter,
  margin = { left: 12, right: 12 },
  children,
  slotProps,
}: LineChartProps) => {
  const items = normalizeSeries(series, config);

  return (
    <BaseChart.Container
      config={config}
      className={className}
      {...slotProps?.container}
    >
      <RechartsPrimitive.LineChart
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
          tooltipIndicator: "line",
          slotProps,
        })}

        {items.map((item, index) => (
          <RechartsPrimitive.Line
            key={item.key}
            dataKey={item.key}
            type={type}
            stroke={resolveSeriesColor(item.key, config, index)}
            strokeWidth={strokeWidth}
            dot={dot}
            {...item.props}
          />
        ))}

        {children}
      </RechartsPrimitive.LineChart>
    </BaseChart.Container>
  );
};

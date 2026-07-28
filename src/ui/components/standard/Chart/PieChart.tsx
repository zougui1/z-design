"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "~/ui/utils";

import { BaseChart } from "../../base";

import {
  type ChartConfig,
  type ChartDatum,
  resolveSeriesColor,
} from "./types";

export interface PieChartProps {
  data: readonly ChartDatum[];
  config: ChartConfig;
  /** Value dataKey (the numeric slice size). */
  dataKey: string;
  /** Category dataKey used to color and label each slice. */
  nameKey: string;
  /** Render as a donut with a hole in the middle. Default `true`. */
  donut?: boolean;
  /** Inner radius. Defaults to `"60%"` for a donut, `0` otherwise. */
  innerRadius?: string | number;
  /** Outer radius. Default `"90%"`. */
  outerRadius?: string | number;
  /** Show the tooltip. Default `true`. */
  tooltip?: boolean;
  /** Show the legend. Default `true`. */
  legend?: boolean;
  className?: string;
  /** Extra recharts elements rendered inside the chart. */
  children?: React.ReactNode;
  slotProps?: {
    container?: Partial<React.ComponentProps<typeof BaseChart.Container>>;
    pie?: Partial<React.ComponentProps<typeof RechartsPrimitive.Pie>>;
    tooltip?: Partial<React.ComponentProps<typeof BaseChart.Tooltip>>;
    tooltipContent?: Partial<
      React.ComponentProps<typeof BaseChart.TooltipContent>
    >;
    legend?: Partial<React.ComponentProps<typeof BaseChart.Legend>>;
    legendContent?: Partial<
      React.ComponentProps<typeof BaseChart.LegendContent>
    >;
  };
}

export const PieChart = ({
  data,
  config,
  dataKey,
  nameKey,
  donut = true,
  innerRadius = donut ? "60%" : 0,
  outerRadius = "90%",
  tooltip = true,
  legend = true,
  className,
  children,
  slotProps,
}: PieChartProps) => {
  return (
    <BaseChart.Container
      config={config}
      className={cn("mx-auto aspect-square", className)}
      {...slotProps?.container}
    >
      <RechartsPrimitive.PieChart>
        {tooltip && (
          <BaseChart.Tooltip
            content={
              <BaseChart.TooltipContent
                nameKey={nameKey}
                hideLabel
                {...slotProps?.tooltipContent}
              />
            }
            {...slotProps?.tooltip}
          />
        )}

        <RechartsPrimitive.Pie
          data={data as ChartDatum[]}
          dataKey={dataKey}
          nameKey={nameKey}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          strokeWidth={2}
          {...slotProps?.pie}
        >
          {data.map((entry, index) => {
            const name = String(entry[nameKey]);
            return (
              <RechartsPrimitive.Cell
                key={name}
                fill={resolveSeriesColor(name, config, index)}
              />
            );
          })}
        </RechartsPrimitive.Pie>

        {legend && (
          <BaseChart.Legend
            content={
              <BaseChart.LegendContent
                nameKey={nameKey}
                className="flex-wrap"
                {...slotProps?.legendContent}
              />
            }
            {...slotProps?.legend}
          />
        )}

        {children}
      </RechartsPrimitive.PieChart>
    </BaseChart.Container>
  );
};

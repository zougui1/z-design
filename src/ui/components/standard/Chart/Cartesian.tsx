"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { BaseChart } from "../../base";

import type { CartesianSlotProps } from "./types";

type Indicator = React.ComponentProps<
  typeof BaseChart.TooltipContent
>["indicator"];

/**
 * Renders the shared decorations (grid, axes, tooltip, legend) for the
 * cartesian charts. Returns a keyed array — recharts flattens it and still
 * detects each element, unlike a wrapping component.
 */
export function renderCartesianDecorations({
  dataKey,
  grid,
  xAxis,
  yAxis,
  tooltip,
  legend,
  tickFormatter,
  tooltipIndicator,
  slotProps,
}: {
  dataKey: string;
  grid: boolean;
  xAxis: boolean;
  yAxis: boolean;
  tooltip: boolean;
  legend: boolean;
  tickFormatter?: (value: string, index: number) => string;
  tooltipIndicator?: Indicator;
  slotProps?: CartesianSlotProps;
}): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];

  if (grid) {
    nodes.push(
      <RechartsPrimitive.CartesianGrid
        key="grid"
        vertical={false}
        {...slotProps?.grid}
      />,
    );
  }

  if (xAxis) {
    nodes.push(
      <RechartsPrimitive.XAxis
        key="x-axis"
        dataKey={dataKey}
        tickLine={false}
        axisLine={false}
        tickMargin={8}
        tickFormatter={tickFormatter}
        {...slotProps?.xAxis}
      />,
    );
  }

  if (yAxis) {
    nodes.push(
      <RechartsPrimitive.YAxis
        key="y-axis"
        tickLine={false}
        axisLine={false}
        width={32}
        {...slotProps?.yAxis}
      />,
    );
  }

  if (tooltip) {
    nodes.push(
      <BaseChart.Tooltip
        key="tooltip"
        content={
          <BaseChart.TooltipContent
            indicator={tooltipIndicator}
            {...slotProps?.tooltipContent}
          />
        }
        {...slotProps?.tooltip}
      />,
    );
  }

  if (legend) {
    nodes.push(
      <BaseChart.Legend
        key="legend"
        content={<BaseChart.LegendContent {...slotProps?.legendContent} />}
        {...slotProps?.legend}
      />,
    );
  }

  return nodes;
}

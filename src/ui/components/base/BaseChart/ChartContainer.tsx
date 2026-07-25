"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "~/ui/utils";

import { ChartContext } from "./ChartContext";
import { getChartColorStyle } from "./getChartStyle";
import { INITIAL_DIMENSION, type ChartConfig } from "./types";

export function ChartContainer({
  className,
  children,
  config,
  style,
  initialDimension = INITIAL_DIMENSION,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"];
  initialDimension?: {
    width: number;
    height: number;
  };
}) {
  const colorStyle = React.useMemo(() => getChartColorStyle(config), [config]);

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        className={cn(
          `[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground
          [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50
          [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border
          [&_.recharts-dot[stroke='#fff']]:stroke-transparent
          [&_.recharts-layer]:outline-hidden
          [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border
          [&_.recharts-radial-bar-background-sector]:fill-muted
          [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted
          [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border
          [&_.recharts-sector]:outline-hidden
          [&_.recharts-sector[stroke='#fff']]:stroke-transparent
          [&_.recharts-surface]:outline-hidden flex aspect-video
          justify-center text-xs`,
          className,
        )}
        style={{ ...colorStyle, ...style }}
        {...props}
      >
        <RechartsPrimitive.ResponsiveContainer initialDimension={initialDimension}>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

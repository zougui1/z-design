import type * as React from "react";

import { CHART_PALETTE, type ChartConfig } from "./types";

/**
 * Build the CSS custom properties (`--color-<key>`) for a chart config so the
 * series colors can be applied as inline style on the chart container, instead
 * of injecting a scoped <style> tag. Colors typically resolve to theme-aware
 * CSS variables (e.g. `var(--chart-1)`), so dark mode still follows for free.
 *
 * `color` is optional: when a series omits it, a palette color is assigned by
 * declaration order (wrapping with `% length` so the index never goes out of
 * bounds).
 */
export function getChartColorStyle(config: ChartConfig): React.CSSProperties {
  const style: Record<string, string> = {};

  Object.entries(config).forEach(([key, itemConfig], index) => {
    const color =
      itemConfig.color ??
      itemConfig.theme?.light ??
      CHART_PALETTE[index % CHART_PALETTE.length] ??
      CHART_PALETTE[0];

    style[`--color-${key}`] = color;
  });

  return style as React.CSSProperties;
}

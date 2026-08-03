"use client";

import { Cpu, Laptop, Server } from "lucide-react";

import { Badge, type BadgeProps } from "~/ui/components/standard/Badge";

import { type DeployTarget, deployTargetLabels } from "./deployment.data";

const deployTargetIcons: Record<DeployTarget, React.ElementType> = {
  server: Server,
  "raspberry-pi": Cpu,
  localhost: Laptop,
};

/**
 * Per-target badge color, fed to the badge's `--z-badge-color` variable. Dark,
 * muted oklch shades so they sit calmly in the header rather than shouting.
 */
const deployTargetColors: Record<DeployTarget, string> = {
  server: "oklch(0.45 0.11 150)", // dark green
  "raspberry-pi": "oklch(0.45 0.12 55)", // dark orange
  localhost: "oklch(0.45 0.15 27)", // dark red
};

export interface DeploymentBadgeProps extends Omit<
  BadgeProps,
  "children" | "icon"
> {
  /** Where the app is deployed. Typically sourced from a public env var. */
  target: DeployTarget;
  /** Override the default per-target icon. Pass `null` to hide it. */
  icon?: React.ReactNode;
}

/**
 * Badge stating where the app is deployed. Domain-specific to the suite, so it
 * lives under `features` and is imported explicitly:
 * `import { DeploymentBadge } from "@zougui1/ui/features/apps"`.
 */
export const DeploymentBadge = ({
  target,
  icon,
  style,
  ...props
}: DeploymentBadgeProps) => {
  const Icon = deployTargetIcons[target];
  const resolvedIcon =
    icon === undefined ? <Icon className="size-3.5" /> : icon;

  return (
    <Badge
      icon={resolvedIcon}
      style={
        {
          "--z-badge-color": deployTargetColors[target],
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      {deployTargetLabels[target]}
    </Badge>
  );
};

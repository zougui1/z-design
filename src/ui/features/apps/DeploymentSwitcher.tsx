"use client";

import { Check, ChevronDown, Cpu, Route, Server } from "lucide-react";
import { useState } from "react";

import { Menu, type MenuProps } from "~/ui/components/standard/Menu";
import { cn } from "~/ui/utils";

import { DeploymentBadge, type DeploymentBadgeProps } from "./DeploymentBadge";
import { deployTargetLabels } from "./deployment.data";
import { type DomainMode, withDomainMode } from "./domain.data";
import { useCurrentHostname } from "./useCurrentHostname";

const domainModeOptions: Record<
  DomainMode,
  { label: string; icon: React.ElementType }
> = {
  auto: { label: "Auto", icon: Route },
  server: { label: deployTargetLabels.server, icon: Server },
  "raspberry-pi": { label: deployTargetLabels["raspberry-pi"], icon: Cpu },
};

export interface DeploymentSwitcherProps extends DeploymentBadgeProps {
  menuProps?: Partial<Omit<MenuProps, "trigger" | "items">>;
}

/**
 * {@link DeploymentBadge} that opens a menu to pick which machine serves the
 * app: auto (server with Raspberry Pi fallback), or pinned to one of them. The
 * choice is the hostname itself, so picking an entry reloads the same page on
 * `{app}.zougui.com`, `{app}.srv.zougui.com` or `{app}.pi.zougui.com`.
 *
 * Outside the suite's domain (e.g. on `localhost`) there is nothing to switch,
 * so it renders the plain badge.
 */
export const DeploymentSwitcher = ({
  menuProps,
  ...props
}: DeploymentSwitcherProps) => {
  const host = useCurrentHostname();
  // Read on open rather than on render so the links keep the page the user has
  // navigated to client-side since.
  const [pageUrl, setPageUrl] = useState("");

  if (!host) {
    return <DeploymentBadge {...props} />;
  }

  return (
    <Menu
      {...menuProps}
      onOpenChange={(open, eventDetails) => {
        if (open) setPageUrl(window.location.href);
        menuProps?.onOpenChange?.(open, eventDetails);
      }}
      trigger={
        <DeploymentBadge
          render={<button type="button" />}
          aria-label="Choose which machine serves this app"
          {...props}
          className={cn("cursor-pointer", props.className)}
        >
          {host.mode === "auto" && <span className="opacity-75">· Auto</span>}
          <ChevronDown className="size-3 opacity-75" />
        </DeploymentBadge>
      }
      items={[
        { groupLabel: "Serve from" },
        ...Object.entries(domainModeOptions).map(([mode, option]) => ({
          href: pageUrl && withDomainMode(pageUrl, mode as DomainMode),
          label: (
            <span className="flex w-full items-center gap-2">
              <option.icon className="size-4" />
              {option.label}
              {mode === host.mode && <Check className="ml-auto size-4" />}
            </span>
          ),
        })),
      ]}
    />
  );
};

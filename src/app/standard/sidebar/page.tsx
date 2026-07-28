"use client";

import {
  BadgeCheckIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  SettingsIcon,
} from "lucide-react";

import {
  Sidebar,
  type SidebarNavGroup,
  Typography,
} from "~/ui/components/standard";

const groups: SidebarNavGroup[] = [
  {
    label: "Platform",
    items: [
      { label: "Home", href: "/standard/sidebar", icon: <HomeIcon /> },
      { label: "Inbox", href: "/inbox", icon: <InboxIcon />, badge: "9" },
      {
        label: "Projects",
        icon: <FolderIcon />,
        defaultOpen: true,
        items: [
          { label: "Design System", href: "/projects/design-system" },
          { label: "Marketing Site", href: "/projects/marketing" },
        ],
      },
    ],
  },
  {
    label: "Account",
    items: [
      { label: "Settings", href: "/settings", icon: <SettingsIcon /> },
      { label: "Verified", href: "/verified", icon: <BadgeCheckIcon /> },
    ],
  },
];

// The sidebar container is `fixed` by default (viewport-level layout).
// Contain it within a demo box instead.
const demoSlotProps = {
  provider: {
    className: "relative h-120 min-h-0 overflow-hidden rounded-lg border",
  },
  root: { className: "absolute h-full" },
} as const;

export default function SidebarPage() {
  return (
    <div className="flex flex-col gap-8 p-6">
      <div className="flex flex-col gap-4">
        <Typography.H2>Sidebar</Typography.H2>

        <Sidebar
          title="Acme Inc"
          footer={
            <span className="text-muted-foreground px-2 text-xs">v1.0.0</span>
          }
          groups={groups}
          slotProps={demoSlotProps}
        >
          <div className="flex flex-1 items-center justify-center p-6">
            <p className="text-muted-foreground text-sm">
              Fixed on desktop; a drawer you can toggle on mobile.
            </p>
          </div>
        </Sidebar>
      </div>

      <div className="flex flex-col gap-4">
        <Typography.H3>Collapsible</Typography.H3>

        <Sidebar
          collapsible
          title="Acme Inc"
          footer={
            <span
              className="text-muted-foreground px-2 text-xs
                group-data-[state=collapsed]:hidden"
            >
              v1.0.0
            </span>
          }
          groups={groups}
          slotProps={demoSlotProps}
        >
          <div className="flex flex-1 items-center justify-center p-6">
            <p className="text-muted-foreground text-sm">
              Use the chevron in the sidebar header to collapse it to an icon
              rail.
            </p>
          </div>
        </Sidebar>
      </div>
    </div>
  );
}

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

export default function SidebarPage() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <Typography.H2>Sidebar</Typography.H2>

      <Sidebar
        title="Acme Inc"
        footer={
          <span className="text-muted-foreground px-2 text-xs">v1.0.0</span>
        }
        groups={groups}
        slotProps={{
          // The sidebar container is `fixed` by default (viewport-level layout).
          // Contain it within this demo box instead.
          provider: {
            className:
              "relative h-120 min-h-0 overflow-hidden rounded-lg border",
          },
          root: { className: "absolute h-full" },
        }}
      >
        <div className="flex flex-1 items-center justify-center p-6">
          <p className="text-muted-foreground text-sm">
            Main content — toggle the sidebar with the trigger.
          </p>
        </div>
      </Sidebar>
    </div>
  );
}

"use client";

import {
  BadgeCheckIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  SettingsIcon,
} from "lucide-react";
import Link from "next/link";

import { Sidebar } from "~/ui/components/base";
import { BaseCollapsible, Typography } from "~/ui/components";

export default function BaseSidebarPage() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <Typography.H2>BaseSidebar</Typography.H2>

      <Sidebar.Provider className="relative h-120 min-h-0 overflow-hidden rounded-lg border">
        {/* The sidebar container is `fixed` by default (viewport-level layout).
            Contain it within this demo box instead. */}
        <Sidebar.Root className="absolute h-full">
          <Sidebar.Header>
            <span className="px-2 text-sm font-semibold">Acme Inc</span>
          </Sidebar.Header>

          <Sidebar.Content>
            <Sidebar.Group>
              <Sidebar.GroupLabel>Platform</Sidebar.GroupLabel>
              <Sidebar.Menu>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton
                    isActive
                    render={<Link href="/base/base-sidebar" />}
                    nativeButton={false}
                  >
                    <HomeIcon />
                    <span>Home</span>
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>

                <Sidebar.MenuItem>
                  <Sidebar.MenuButton
                    render={<Link href="/inbox" />}
                    nativeButton={false}
                  >
                    <InboxIcon />
                    <span>Inbox</span>
                  </Sidebar.MenuButton>
                  <Sidebar.MenuBadge>9</Sidebar.MenuBadge>
                </Sidebar.MenuItem>

                <BaseCollapsible.Root
                  render={<Sidebar.MenuItem />}
                  className="group/collapsible"
                  defaultOpen
                >
                  <Sidebar.MenuButton
                    render={<BaseCollapsible.Trigger />}
                    className="w-full"
                  >
                    <FolderIcon />
                    <span>Projects</span>
                    <BaseCollapsible.TriggerIcon className="ml-auto" />
                  </Sidebar.MenuButton>

                  <BaseCollapsible.Panel>
                    <Sidebar.MenuSub>
                      <Sidebar.MenuSubItem>
                        <Sidebar.MenuSubButton
                          render={<Link href="/projects/design-system" />}
                        >
                          Design System
                        </Sidebar.MenuSubButton>
                      </Sidebar.MenuSubItem>
                      <Sidebar.MenuSubItem>
                        <Sidebar.MenuSubButton
                          render={<Link href="/projects/marketing" />}
                        >
                          Marketing Site
                        </Sidebar.MenuSubButton>
                      </Sidebar.MenuSubItem>
                    </Sidebar.MenuSub>
                  </BaseCollapsible.Panel>
                </BaseCollapsible.Root>
              </Sidebar.Menu>
            </Sidebar.Group>

            <Sidebar.Separator />

            <Sidebar.Group>
              <Sidebar.GroupLabel>Account</Sidebar.GroupLabel>
              <Sidebar.Menu>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton
                    render={<Link href="/settings" />}
                    nativeButton={false}
                  >
                    <SettingsIcon />
                    <span>Settings</span>
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton
                    render={<Link href="/verified" />}
                    nativeButton={false}
                  >
                    <BadgeCheckIcon />
                    <span>Verified</span>
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
              </Sidebar.Menu>
            </Sidebar.Group>
          </Sidebar.Content>

          <Sidebar.Footer>
            <span className="text-muted-foreground px-2 text-xs">v1.0.0</span>
          </Sidebar.Footer>
        </Sidebar.Root>

        <Sidebar.Inset className="flex items-center justify-center gap-2 p-6">
          <Sidebar.Trigger variant="outline" />
          <p className="text-muted-foreground text-sm">
            Main content — toggle the sidebar with the trigger.
          </p>
        </Sidebar.Inset>
      </Sidebar.Provider>
    </div>
  );
}

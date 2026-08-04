"use client";

import {
  BadgeCheckIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  SettingsIcon,
} from "lucide-react";
import Link from "next/link";

import { BaseCollapsible, Typography, Link as ZLink } from "~/ui/components";
import { BaseSidebar } from "~/ui/components/base";

export default function BaseSidebarPage() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <Typography.H2>BaseSidebar</Typography.H2>

      <BaseSidebar.Provider
        className="relative h-120 min-h-0 overflow-hidden rounded-lg border"
      >
        {/* The sidebar container is `fixed` by default (viewport-level layout).
            Contain it within this demo box instead. */}
        <BaseSidebar.Root className="absolute h-full">
          <BaseSidebar.Header>
            <span className="px-2 text-sm font-semibold">Acme Inc</span>
          </BaseSidebar.Header>

          <BaseSidebar.Content>
            <BaseSidebar.Group>
              <BaseSidebar.GroupLabel>Platform</BaseSidebar.GroupLabel>
              <BaseSidebar.Menu>
                <BaseSidebar.MenuItem>
                  <BaseSidebar.MenuButton
                    isActive
                    render={<Link href="/base/base-sidebar" />}
                    nativeButton={false}
                  >
                    <HomeIcon />
                    <span>Home</span>
                  </BaseSidebar.MenuButton>
                </BaseSidebar.MenuItem>

                <BaseSidebar.MenuItem>
                  <BaseSidebar.MenuButton
                    render={<ZLink href="/inbox" />}
                    nativeButton={false}
                  >
                    <InboxIcon />
                    <span>Inbox</span>
                  </BaseSidebar.MenuButton>
                  <BaseSidebar.MenuBadge>9</BaseSidebar.MenuBadge>
                </BaseSidebar.MenuItem>

                <BaseCollapsible.Root
                  render={<BaseSidebar.MenuItem />}
                  className="group/collapsible"
                  defaultOpen
                >
                  <BaseSidebar.MenuButton
                    render={<BaseCollapsible.Trigger />}
                    className="w-full"
                  >
                    <FolderIcon />
                    <span>Projects</span>
                    <BaseCollapsible.TriggerIcon className="ml-auto" />
                  </BaseSidebar.MenuButton>

                  <BaseCollapsible.Panel>
                    <BaseSidebar.MenuSub>
                      <BaseSidebar.MenuSubItem>
                        <BaseSidebar.MenuSubButton
                          render={<ZLink href="/projects/design-system" />}
                        >
                          Design System
                        </BaseSidebar.MenuSubButton>
                      </BaseSidebar.MenuSubItem>
                      <BaseSidebar.MenuSubItem>
                        <BaseSidebar.MenuSubButton
                          render={<ZLink href="/projects/marketing" />}
                        >
                          Marketing Site
                        </BaseSidebar.MenuSubButton>
                      </BaseSidebar.MenuSubItem>
                    </BaseSidebar.MenuSub>
                  </BaseCollapsible.Panel>
                </BaseCollapsible.Root>
              </BaseSidebar.Menu>
            </BaseSidebar.Group>

            <BaseSidebar.Separator />

            <BaseSidebar.Group>
              <BaseSidebar.GroupLabel>Account</BaseSidebar.GroupLabel>
              <BaseSidebar.Menu>
                <BaseSidebar.MenuItem>
                  <BaseSidebar.MenuButton
                    render={<ZLink href="/settings" />}
                    nativeButton={false}
                  >
                    <SettingsIcon />
                    <span>Settings</span>
                  </BaseSidebar.MenuButton>
                </BaseSidebar.MenuItem>
                <BaseSidebar.MenuItem>
                  <BaseSidebar.MenuButton
                    render={<ZLink href="/verified" />}
                    nativeButton={false}
                  >
                    <BadgeCheckIcon />
                    <span>Verified</span>
                  </BaseSidebar.MenuButton>
                </BaseSidebar.MenuItem>
              </BaseSidebar.Menu>
            </BaseSidebar.Group>
          </BaseSidebar.Content>

          <BaseSidebar.Footer>
            <span className="text-muted-foreground px-2 text-xs">v1.0.0</span>
          </BaseSidebar.Footer>
        </BaseSidebar.Root>

        <BaseSidebar.Inset
          className="flex items-center justify-center gap-2 p-6"
        >
          <BaseSidebar.Trigger variant="outline" />
          <p className="text-muted-foreground text-sm">
            Main content — toggle the sidebar with the trigger.
          </p>
        </BaseSidebar.Inset>
      </BaseSidebar.Provider>
    </div>
  );
}

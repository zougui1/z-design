"use client";

import { BaseTabs, Container, Typography } from "~/ui/components";

export default function BaseTabsPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2>BaseTabs</Typography.H2>

          <BaseTabs.Root defaultValue="overview" className="w-96">
            <BaseTabs.List>
              <BaseTabs.Tab value="overview">Overview</BaseTabs.Tab>
              <BaseTabs.Tab value="analytics">Analytics</BaseTabs.Tab>
              <BaseTabs.Tab value="reports">Reports</BaseTabs.Tab>
            </BaseTabs.List>

            <BaseTabs.Panel value="overview">
              <p className="text-muted-foreground text-sm">
                A high-level summary of your workspace.
              </p>
            </BaseTabs.Panel>
            <BaseTabs.Panel value="analytics">
              <p className="text-muted-foreground text-sm">
                Charts and metrics for the current period.
              </p>
            </BaseTabs.Panel>
            <BaseTabs.Panel value="reports">
              <p className="text-muted-foreground text-sm">
                Downloadable reports and exports.
              </p>
            </BaseTabs.Panel>
          </BaseTabs.Root>
        </div>
      </div>
    </Container>
  );
}

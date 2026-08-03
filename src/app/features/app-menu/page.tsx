"use client";

import { Button, Container, Typography } from "~/ui/components";
import { AppMenu } from "~/ui/features/apps";

export default function AppMenuPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2>App Menu</Typography.H2>
          <Typography.Muted>
            App switcher pre-wired with the suite&apos;s apps. Domain-specific,
            so it is imported explicitly from
            &quot;@zougui1/ui/features/apps&quot; rather than the main barrel.
          </Typography.Muted>
          <div>
            <AppMenu trigger={<Button variant="outline">Apps</Button>} />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Typography.H2>Excluding the current app</Typography.H2>
          <Typography.Muted>
            Pass <code>current</code> to hide the active app from the list with
            full type safety.
          </Typography.Muted>
          <div>
            <AppMenu
              current="ZUI"
              trigger={<Button variant="outline">Apps (ZUI hidden)</Button>}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

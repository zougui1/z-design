import { env } from "~/env";
import { BaseSidebar, Header, Link, Typography } from "~/ui";
import { AppMenu, DeploymentBadge } from "~/ui/features/apps";

export const AppHeader = () => {
  return (
    <Header>
      <BaseSidebar.Trigger className="-ml-2 md:hidden" />

      <Link href="/">
        <Typography.H4 className="font-semibold">ZUI</Typography.H4>
      </Link>

      <DeploymentBadge
        target={env.NEXT_PUBLIC_DEPLOY_TARGET}
        className="ml-auto"
      />

      <AppMenu current="ZUI" />
    </Header>
  );
};

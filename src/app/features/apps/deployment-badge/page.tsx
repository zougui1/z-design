import { Container, Typography } from "~/ui/components";
import { DeploymentBadge, deployTargetValues } from "~/ui/features/apps";

export default function DeploymentBadgePage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2>Deployment Badge</Typography.H2>
          <Typography.Muted>
            States where the app is deployed. Each app sources the target from a
            public env var and passes it as a prop; every target is shown below.
          </Typography.Muted>
          <div className="flex flex-wrap items-center gap-2">
            {deployTargetValues.map((target) => (
              <DeploymentBadge key={target} target={target} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Typography.H2>Variants</Typography.H2>
          <Typography.Muted>
            All <code>Badge</code> props pass through; the icon can be
            overridden or hidden with <code>icon={"{null}"}</code>.
          </Typography.Muted>
          <div className="flex flex-wrap items-center gap-2">
            <DeploymentBadge target="server" variant="soft" />
            <DeploymentBadge target="raspberry-pi" variant="outline" />
            <DeploymentBadge target="localhost" icon={null} />
          </div>
        </div>
      </div>
    </Container>
  );
}

import { CheckCircle2Icon, InfoIcon, XCircleIcon } from "lucide-react";

import { Alert, Container, Typography } from "~/ui/components";

export default function AlertPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2>Alert</Typography.H2>
          <div className="flex flex-col gap-3">
            <Alert
              icon={<InfoIcon />}
              title="Heads up"
              description="You can add components to your app using the CLI."
            />

            <Alert
              color="success"
              icon={<CheckCircle2Icon />}
              title="Payment successful"
              description="Your subscription has been renewed."
            />

            <Alert
              variant="outline"
              color="destructive"
              icon={<XCircleIcon />}
              title="Something went wrong"
              description="Your changes could not be saved. Please try again."
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Typography.H2>Title only</Typography.H2>
          <Alert color="neutral" icon={<InfoIcon />} title="A minimal alert." />
        </div>
      </div>
    </Container>
  );
}

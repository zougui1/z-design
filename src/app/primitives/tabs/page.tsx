import { Container, Typography, Tabs } from "~/ui/components";
import { cn } from "~/ui/utils";

const Section = ({
  title,
  children,
  className,
}: {
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      {title && <Typography.H2>{title}</Typography.H2>}

      <div className={cn("flex flex-col flex-wrap gap-5", className)}>
        {children}
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="Tabs" className="flex-col">
          <Tabs.Root>
            <Tabs.List>
              <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
              <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
              <Tabs.Trigger value="reports">Reports</Tabs.Trigger>
              <Tabs.Trigger value="settings">Settings</Tabs.Trigger>

              <Tabs.Indicator />
            </Tabs.List>

            <Tabs.Content value="overview">
              <p>Overview</p>
              <p>
                View your key metrics and recent project activity. Track
                progress across all your active projects.
              </p>
            </Tabs.Content>

            <Tabs.Content value="analytics">
              <p>Analytics</p>
              <p>
                Track performance and user engagement metrics. Monitor trends
                and identify growth opportunities.
              </p>
            </Tabs.Content>

            <Tabs.Content value="reports">
              <p>Reports</p>
              <p>
                Generate and download your detailed reports. Export data in
                multiple formats for analysis.
              </p>
            </Tabs.Content>

            <Tabs.Content value="settings">
              <p>Settings</p>
              <p>
                Manage your account preferences and options. Customize your
                experience to fit your needs.
              </p>
            </Tabs.Content>
          </Tabs.Root>
        </Section>
      </div>
    </Container>
  );
}

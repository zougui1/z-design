import { BaseProgress, Container, Typography } from "~/ui/components";

const Section = ({
  title,
  children,
}: {
  title?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-4">
      {title && <Typography.H2>{title}</Typography.H2>}
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  );
};

export default function BaseProgressPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BaseProgress">
          {[0, 25, 50, 75, 100].map((value) => (
            <BaseProgress.Root key={value} value={value}>
              <BaseProgress.Label>Uploading…</BaseProgress.Label>
              <BaseProgress.Value />
              <BaseProgress.Track>
                <BaseProgress.Indicator />
              </BaseProgress.Track>
            </BaseProgress.Root>
          ))}

          <div>
            <Typography.Muted>Indeterminate (value = null)</Typography.Muted>
            <BaseProgress.Root value={null} className="mt-2">
              <BaseProgress.Track>
                <BaseProgress.Indicator />
              </BaseProgress.Track>
            </BaseProgress.Root>
          </div>
        </Section>
      </div>
    </Container>
  );
}

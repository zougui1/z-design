import { BaseSeparator, Container, Typography } from "~/ui/components/base";
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

      <div className={cn("flex flex-wrap gap-5", className)}>{children}</div>
    </div>
  );
};

const Row = ({ children }: { children?: React.ReactNode }) => {
  return <div className="flex flex-wrap gap-2">{children}</div>;
};

export default function BaseSeparatorPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="Horizontal">
          <div className="flex max-w-sm flex-col gap-4 text-sm">
            <div className="flex flex-col gap-1.5">
              <div className="leading-none font-medium">shadcn/ui</div>
              <div className="text-muted-foreground">
                The Foundation for your Design System
              </div>
            </div>

            <BaseSeparator.Root />

            <div>
              A set of beautifully designed components that you can customize,
              extend, and build on.
            </div>
          </div>
        </Section>

        <Section title="Vertical">
          <div className="flex h-5 items-center gap-4 text-sm">
            <div>Blog</div>
            <BaseSeparator.Root orientation="vertical" />
            <div>Docs</div>
            <BaseSeparator.Root orientation="vertical" />
            <div>Source</div>
          </div>
        </Section>

        <Section title="Content">
          <div className="flex w-full max-w-sm flex-col gap-4 text-sm">
            <div>Introduction</div>

            <BaseSeparator.Group>
              <BaseSeparator.Root />
              <BaseSeparator.Content>Components</BaseSeparator.Content>
            </BaseSeparator.Group>

            <div className="flex flex-col gap-2">
              <div>Accordion</div>
              <div>Alert Dialog</div>
              <div>Autocomplete</div>
            </div>
          </div>
        </Section>
      </div>
    </Container>
  );
}

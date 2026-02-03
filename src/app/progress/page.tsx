import { Trash2Icon } from "lucide-react";
import { Container, Progress, Typography } from "~/ui/components";
import { cn } from "~/ui/utils";

const colors = [
  "default",
  "neutral",
  "primary",
  "secondary",
  "success",
  "warning",
  "destructive",
  "info",
] as const;

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

export default function HomePage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="Progress" className="flex-col">
          {colors.map((color) => (
            <div key={color} className="w-48">
              <Progress.Root value={40}>
                <Progress.Label>Export data</Progress.Label>
                <Progress.Value />
                <Progress.Track color={color}>
                  <Progress.Indicator />
                </Progress.Track>
              </Progress.Root>
            </div>
          ))}
        </Section>

        <Section title="Colored indicator only" className="flex-col">
          {colors.map((color) => (
            <div key={color} className="w-48">
              <Progress.Root value={40}>
                <Progress.Label>Export data</Progress.Label>
                <Progress.Value />
                <Progress.Track>
                  <Progress.Indicator color={color} />
                </Progress.Track>
              </Progress.Root>
            </div>
          ))}
        </Section>

        <Section title="No label" className="flex-col">
          {colors.map((color) => (
            <div key={color} className="w-48">
              <Progress.Root value={40}>
                <Progress.Value />
                <Progress.Track>
                  <Progress.Indicator color={color} />
                </Progress.Track>
              </Progress.Root>
            </div>
          ))}
        </Section>

        <Section title="No value" className="flex-col">
          {colors.map((color) => (
            <div key={color} className="w-48">
              <Progress.Root value={40}>
                <Progress.Label>Export data</Progress.Label>
                <Progress.Track>
                  <Progress.Indicator color={color} />
                </Progress.Track>
              </Progress.Root>
            </div>
          ))}
        </Section>

        <Section title="Progress only" className="flex-col">
          {colors.map((color) => (
            <div key={color} className="w-48">
              <Progress.Root value={40}>
                <Progress.Track>
                  <Progress.Indicator color={color} />
                </Progress.Track>
              </Progress.Root>
            </div>
          ))}
        </Section>
      </div>
    </Container>
  );
}

import { Container, Switch, Typography } from "~/ui/components";
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
    <div className="space-y-4">
      {title && <Typography.H2>{title}</Typography.H2>}

      <div className={cn("flex gap-5", className)}>{children}</div>
    </div>
  );
};

export default function HomePage() {
  return (
    <Container className="flex flex-col gap-8">
      <Section className="flex-col">
        {colors.map((color) => (
          <div key={color} className="flex gap-4">
            <Switch color={color} defaultChecked />
            <Switch color={color} defaultChecked={false} />
          </div>
        ))}
      </Section>

      <Section title="Disabled" className="flex-col">
        {colors.map((color) => (
          <div key={color} className="flex gap-4">
            <Switch disabled color={color} defaultChecked />
            <Switch disabled color={color} defaultChecked={false} />
          </div>
        ))}
      </Section>

      <Section title="Invalid" className="flex-col">
        {colors.map((color) => (
          <div key={color} className="flex gap-4">
            <Switch aria-invalid color={color} defaultChecked />
            <Switch aria-invalid color={color} defaultChecked={false} />
          </div>
        ))}
      </Section>
    </Container>
  );
}

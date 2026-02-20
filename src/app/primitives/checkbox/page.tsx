import { Container, Checkbox, Typography } from "~/ui/components";
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
            <Checkbox color={color} defaultChecked />
            <Checkbox color={color} defaultChecked={false} />
            <Checkbox color={color} indeterminate />
          </div>
        ))}
      </Section>

      <Section title="Disabled" className="flex-col">
        {colors.map((color) => (
          <div key={color} className="flex gap-4">
            <Checkbox disabled color={color} defaultChecked />
            <Checkbox disabled color={color} defaultChecked={false} />
            <Checkbox disabled color={color} indeterminate />
          </div>
        ))}
      </Section>

      <Section title="Invalid" className="flex-col">
        {colors.map((color) => (
          <div key={color} className="flex gap-4">
            <Checkbox aria-invalid color={color} defaultChecked />
            <Checkbox aria-invalid color={color} defaultChecked={false} />
            <Checkbox aria-invalid color={color} indeterminate />
          </div>
        ))}
      </Section>
    </Container>
  );
}

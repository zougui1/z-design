import { Container, Textarea, Typography } from "~/ui/components";
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

      <div className={cn("flex flex-wrap gap-5", className)}>{children}</div>
    </div>
  );
};

export default function HomePage() {
  return (
    <Container className="flex flex-col gap-8">
      <Section>
        {colors.map((color) => (
          <Textarea
            key={color}
            color={color}
            className="w-[25ch]"
            placeholder="Placeholder..."
          />
        ))}
      </Section>

      <Section title="Disabled">
        {colors.map((color) => (
          <Textarea
            key={color}
            color={color}
            className="max-w-[25ch]"
            disabled
            placeholder="Placeholder..."
          />
        ))}
      </Section>

      <Section title="Invalid">
        {colors.map((color) => (
          <Textarea
            key={color}
            color={color}
            className="max-w-[25ch]"
            aria-invalid
            placeholder="Placeholder..."
          />
        ))}
      </Section>
    </Container>
  );
}

import { Container, Input, Field, Typography } from "~/ui/components";
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
          <Field.Root key={color}>
            <Field.Label>Name</Field.Label>

            <Field.Control
              color={color}
              className="w-[25ch]"
              placeholder="Placeholder..."
            />

            <Field.Error match="valueMissing">
              Please enter your name
            </Field.Error>

            <Field.Description>Visible on your profile</Field.Description>
          </Field.Root>
        ))}
      </Section>

      <Section title="Disabled">
        {colors.map((color) => (
          <Field.Root key={color} disabled>
            <Field.Label>Name</Field.Label>

            <Field.Control
              color={color}
              className="w-[25ch]"
              placeholder="Placeholder..."
            />

            <Field.Error match="valueMissing">
              Please enter your name
            </Field.Error>

            <Field.Description>Visible on your profile</Field.Description>
          </Field.Root>
        ))}
      </Section>

      <Section title="Invalid">
        {colors.map((color) => (
          <Field.Root key={color} invalid>
            <Field.Label>Name</Field.Label>

            <Field.Control
              color={color}
              className="w-[25ch]"
              placeholder="Placeholder..."
            />

            <Field.Error match="valueMissing">
              Please enter your name
            </Field.Error>

            <Field.Description>Visible on your profile</Field.Description>
          </Field.Root>
        ))}
      </Section>
    </Container>
  );
}

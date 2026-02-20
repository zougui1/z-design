import { MinusIcon, PlusIcon } from "lucide-react";
import { Container, NumberField, Typography } from "~/ui/components";
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
          <div key={color}>
            <NumberField.Root key={color}>
              <label>Amount</label>

              <NumberField.Group>
                <NumberField.Decrement>
                  <MinusIcon />
                </NumberField.Decrement>

                <NumberField.Input
                  className="w-[13ch]"
                  placeholder="Placeholder..."
                  color={color}
                />

                <NumberField.Increment>
                  <PlusIcon />
                </NumberField.Increment>
              </NumberField.Group>
            </NumberField.Root>
          </div>
        ))}
      </Section>

      <Section title="Disabled">
        {colors.map((color) => (
          <div key={color}>
            <NumberField.Root key={color}>
              <label>Amount</label>

              <NumberField.Group>
                <NumberField.Decrement>
                  <MinusIcon />
                </NumberField.Decrement>

                <NumberField.Input
                  className="w-[13ch]"
                  placeholder="Placeholder..."
                  color={color}
                  disabled
                />

                <NumberField.Increment>
                  <PlusIcon />
                </NumberField.Increment>
              </NumberField.Group>
            </NumberField.Root>
          </div>
        ))}
      </Section>

      <Section title="Invalid">
        {colors.map((color) => (
          <div key={color}>
            <NumberField.Root key={color}>
              <label>Amount</label>

              <NumberField.Group>
                <NumberField.Decrement>
                  <MinusIcon />
                </NumberField.Decrement>

                <NumberField.Input
                  className="w-[13ch]"
                  placeholder="Placeholder..."
                  color={color}
                  aria-invalid
                />

                <NumberField.Increment>
                  <PlusIcon />
                </NumberField.Increment>
              </NumberField.Group>
            </NumberField.Root>
          </div>
        ))}
      </Section>
    </Container>
  );
}

import { SearchIcon } from "lucide-react";
import { Container, InputGroup, Typography } from "~/ui/components";
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
            <InputGroup.Root color={color}>
              <InputGroup.Addon>
                <SearchIcon />
              </InputGroup.Addon>

              <InputGroup.Input
                className="w-[25ch]"
                placeholder="Placeholder..."
              />

              <InputGroup.Addon align="inline-end">12 results</InputGroup.Addon>
            </InputGroup.Root>
          </div>
        ))}
      </Section>

      <Section title="Disabled">
        {colors.map((color) => (
          <div key={color}>
            <InputGroup.Root color={color}>
              <InputGroup.Addon>
                <SearchIcon />
              </InputGroup.Addon>

              <InputGroup.Input
                className="w-[25ch]"
                placeholder="Placeholder..."
                disabled
              />

              <InputGroup.Addon align="inline-end">12 results</InputGroup.Addon>
            </InputGroup.Root>
          </div>
        ))}
      </Section>

      <Section title="Invalid">
        {colors.map((color) => (
          <div key={color}>
            <InputGroup.Root color={color}>
              <InputGroup.Addon>
                <SearchIcon />
              </InputGroup.Addon>

              <InputGroup.Input
                className="w-[25ch]"
                placeholder="Placeholder..."
                aria-invalid
              />

              <InputGroup.Addon align="inline-end">12 results</InputGroup.Addon>
            </InputGroup.Root>
          </div>
        ))}
      </Section>
    </Container>
  );
}

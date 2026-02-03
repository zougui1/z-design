import { Container, Spinner, Typography } from "~/ui/components";
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
        <Section title="Button" className="flex-col">
          {colors.map((color) => (
            <div key={color}>
              <Spinner color={color} />
            </div>
          ))}
        </Section>
      </div>
    </Container>
  );
}

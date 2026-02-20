import { Container, Separator, Typography } from "~/ui/components";
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

const appearances = ["solid", "gradient"] as const;

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

      <div className={cn("flex flex-wrap gap-4", className)}>{children}</div>
    </div>
  );
};

export default function HomePage() {
  return (
    <Container className="flex flex-col gap-8">
      {appearances.map((appearance) => (
        <Section
          key={appearance}
          title={appearance}
          className="flex flex-wrap gap-4"
        >
          {colors.map((color) => (
            <div key={color} className="inline-block">
              <div className="space-y-1">
                <h4 className="text-sm leading-none font-medium">
                  Radix Primitives
                </h4>
                <p className="text-muted-foreground text-sm">
                  An open-source UI component library.
                </p>
              </div>

              <Separator
                appearance={appearance}
                color={color}
                className="my-4"
              />

              <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Blog</div>
                <Separator
                  appearance={appearance}
                  color={color}
                  orientation="vertical"
                />
                <div>Docs</div>
                <Separator
                  appearance={appearance}
                  color={color}
                  orientation="vertical"
                />
                <div>Source</div>
              </div>
            </div>
          ))}
        </Section>
      ))}
    </Container>
  );
}

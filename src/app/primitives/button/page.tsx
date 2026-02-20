import { Trash2Icon } from "lucide-react";
import {
  Container,
  Button,
  type ButtonProps,
  Typography,
} from "~/ui/components";
import { cn } from "~/ui/utils";

const appearances: ButtonProps["appearance"][] = [
  "solid",
  "outline",
  "ghost",
  "link",
];

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

const variants: ButtonProps["variant"][] = ["default", "primary", "muted"];

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

export default function HomePage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="Button" className="flex-col">
          {appearances.map((appearance) => (
            <Row key={appearance}>
              {colors.map((color) => (
                <div key={color}>
                  <Button appearance={appearance} color={color}>
                    <Trash2Icon /> Click me
                  </Button>
                </div>
              ))}
            </Row>
          ))}
        </Section>

        <Section title="Button" className="flex-col">
          {appearances.map((appearance) => (
            <Row key={appearance}>
              {colors.map((color) => (
                <div key={color}>
                  <Button appearance={appearance} color={color}>
                    <Trash2Icon /> Click me
                  </Button>
                </div>
              ))}
            </Row>
          ))}
        </Section>

        <Section title="Disabled" className="flex-col">
          {appearances.map((appearance) => (
            <Row key={appearance}>
              {colors.map((color) => (
                <div key={color}>
                  <Button disabled appearance={appearance} color={color}>
                    <Trash2Icon /> Click me
                  </Button>
                </div>
              ))}
            </Row>
          ))}
        </Section>

        <Section title="Variants" className="gap-4">
          {variants.map((variant) => (
            <Button key={variant} variant={variant}>
              <Trash2Icon /> {variant}
            </Button>
          ))}
        </Section>

        <Section title="Invalid" className="flex-col">
          {appearances.map((appearance) => (
            <Row key={appearance}>
              {colors.map((color) => (
                <div key={color}>
                  <Button aria-invalid appearance={appearance} color={color}>
                    <Trash2Icon /> Click me
                  </Button>
                </div>
              ))}
            </Row>
          ))}
        </Section>

        <Section title="Loading" className="flex-col">
          {appearances.map((appearance) => (
            <Row key={appearance}>
              {colors.map((color) => (
                <div key={color}>
                  <Button appearance={appearance} color={color} loading>
                    <Trash2Icon /> Click me
                  </Button>
                </div>
              ))}
            </Row>
          ))}
        </Section>
      </div>
    </Container>
  );
}

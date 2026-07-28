import { Save, Trash2Icon } from "lucide-react";

import {
  type BaseButtonProps,
  Button,
  Container,
  Typography,
} from "~/ui/components";
import { cn } from "~/ui/utils";

const variants: BaseButtonProps["variant"][] = [
  "solid",
  "outline",
  "ghost",
  "link",
];

const colors = [
  "neutral",
  "primary",
  "success",
  "warning",
  "destructive",
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

const Row = ({ children }: { children?: React.ReactNode }) => {
  return <div className="flex flex-wrap gap-2">{children}</div>;
};

export default function ButtonPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BaseButton" className="flex-col">
          {variants.map((variant) => (
            <Row key={variant}>
              {colors.map((color) => (
                <div key={color}>
                  <Button variant={variant} color={color}>
                    <Trash2Icon /> Click me
                  </Button>
                </div>
              ))}
            </Row>
          ))}
        </Section>

        <Section title="Disabled" className="flex-col">
          {variants.map((variant) => (
            <Row key={variant}>
              {colors.map((color) => (
                <div key={color}>
                  <Button disabled variant={variant} color={color}>
                    <Trash2Icon /> Click me
                  </Button>
                </div>
              ))}
            </Row>
          ))}
        </Section>

        <Section title="Invalid" className="flex-col">
          {variants.map((variant) => (
            <Row key={variant}>
              {colors.map((color) => (
                <div key={color}>
                  <Button aria-invalid variant={variant} color={color}>
                    <Trash2Icon /> Click me
                  </Button>
                </div>
              ))}
            </Row>
          ))}
        </Section>

        <Section title="Loading" className="flex-col">
          {variants.map((variant) => (
            <Row key={variant}>
              {colors.map((color) => (
                <div key={color}>
                  <Button variant={variant} color={color} loading>
                    <Trash2Icon /> Click me
                  </Button>
                </div>
              ))}
            </Row>
          ))}
        </Section>

        <Section title="Tooltip" className="flex-col">
          <Row>
            {(["left", "top", "bottom", "right"] as const).map((side) => (
              <Button
                key={side}
                variant="outline"
                className="w-fit capitalize"
                tooltip={{ side, content: <p>Add to library</p> }}
              >
                {side}
              </Button>
            ))}
          </Row>

          <Row>
            {(["left", "top", "bottom", "right"] as const).map((side) => (
              <Button
                key={side}
                variant="outline"
                className="w-fit capitalize"
                tooltip={{ side, content: <p>Add to library</p> }}
                disabled
              >
                {side}
              </Button>
            ))}
          </Row>

          <Row>
            {(["left", "top", "bottom", "right"] as const).map((side) => (
              <Button
                key={side}
                variant="outline"
                className="w-fit capitalize"
                tooltip={{ side, content: <p>Add to library</p> }}
                loading
              >
                {side}
              </Button>
            ))}
          </Row>
        </Section>

        <Section title="Copy Button">
          <Button copyContent="Basic button" className="select-all">
            <Save />
          </Button>
        </Section>
      </div>
    </Container>
  );
}

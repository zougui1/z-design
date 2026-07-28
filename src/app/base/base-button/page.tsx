import { Trash2Icon } from "lucide-react";

import {
  BaseButton,
  type BaseButtonProps,
  Container,
  Spinner,
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

export default function BaseButtonPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BaseButton" className="flex-col">
          {variants.map((variant) => (
            <Row key={variant}>
              {colors.map((color) => (
                <div key={color}>
                  <BaseButton variant={variant} color={color}>
                    <Trash2Icon /> Click me
                  </BaseButton>
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
                  <BaseButton disabled variant={variant} color={color}>
                    <Trash2Icon /> Click me
                  </BaseButton>
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
                  <BaseButton aria-invalid variant={variant} color={color}>
                    <Trash2Icon /> Click me
                  </BaseButton>
                </div>
              ))}
            </Row>
          ))}
        </Section>

        <Section title="Loading" className="flex-col">
          {variants.map((variant) => (
            <Row key={variant}>
              {colors.map((color) => (
                <div key={color} className="relative">
                  <BaseButton variant={variant} color={color} disabled>
                    <Trash2Icon /> Click me
                  </BaseButton>
                  <Spinner
                    data-slot="button-spinner"
                    color="default"
                    className={cn(
                      `absolute top-0 right-0 size-4.5 translate-x-1.5
                      -translate-y-1.5 rounded-full`,
                    )}
                  />
                </div>
              ))}
            </Row>
          ))}
        </Section>
      </div>
    </Container>
  );
}

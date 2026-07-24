import {
  AlertTriangleIcon,
  CheckCircle2Icon,
  InfoIcon,
  XCircleIcon,
} from "lucide-react";

import { BaseAlert, Container, Typography } from "~/ui/components";
import { cn } from "~/ui/utils";

const variants: BaseAlert.Root.Variant[] = ["soft", "outline"];

const colors: BaseAlert.Root.Color[] = [
  "neutral",
  "primary",
  "success",
  "warning",
  "destructive",
];

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

      <div className={cn("flex flex-col gap-3", className)}>{children}</div>
    </div>
  );
};

const Row = ({ children }: { children?: React.ReactNode }) => {
  return <div className="flex flex-wrap gap-2">{children}</div>;
};

export default function BaseAlertPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        {variants.map((variant) => (
          <Section key={variant} title={`BaseAlert — ${variant}`}>
            {colors.map((color) => (
              <BaseAlert.Root key={color} variant={variant} color={color}>
                <InfoIcon />
                <BaseAlert.Title className="capitalize">{color}</BaseAlert.Title>
                <BaseAlert.Description>
                  This is a {variant} alert with the {color} color.
                </BaseAlert.Description>
              </BaseAlert.Root>
            ))}
          </Section>
        ))}

        <Section title="With icons">
          <BaseAlert.Root color="success">
            <CheckCircle2Icon />
            <BaseAlert.Title>Payment successful</BaseAlert.Title>
            <BaseAlert.Description>
              Your subscription has been renewed.
            </BaseAlert.Description>
          </BaseAlert.Root>

          <BaseAlert.Root color="warning">
            <AlertTriangleIcon />
            <BaseAlert.Title>Storage almost full</BaseAlert.Title>
            <BaseAlert.Description>
              You have used 90% of your available space.
            </BaseAlert.Description>
          </BaseAlert.Root>

          <BaseAlert.Root variant="outline" color="destructive">
            <XCircleIcon />
            <BaseAlert.Title>Something went wrong</BaseAlert.Title>
            <BaseAlert.Description>
              Your changes could not be saved. Please try again.
            </BaseAlert.Description>
          </BaseAlert.Root>
        </Section>

        <Section title="Title only">
          <BaseAlert.Root color="neutral">
            <InfoIcon />
            <BaseAlert.Title>A minimal single-line alert.</BaseAlert.Title>
          </BaseAlert.Root>
        </Section>
      </div>
    </Container>
  );
}

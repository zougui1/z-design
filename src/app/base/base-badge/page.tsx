import { CheckIcon } from "lucide-react";

import { BaseBadge, Container, Typography } from "~/ui/components";
import { cn } from "~/ui/utils";

const variants: BaseBadge.Variant[] = ["solid", "soft", "outline"];

const colors: BaseBadge.Color[] = [
  "neutral",
  "primary",
  "success",
  "warning",
  "destructive",
];

const sizes: BaseBadge.Size[] = ["sm", "default", "lg"];

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
  return <div className="flex flex-wrap items-center gap-2">{children}</div>;
};

export default function BaseBadgePage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BaseBadge" className="flex-col">
          {variants.map((variant) => (
            <Row key={variant}>
              {colors.map((color) => (
                <BaseBadge key={color} variant={variant} color={color}>
                  {color}
                </BaseBadge>
              ))}
            </Row>
          ))}
        </Section>

        <Section title="Sizes">
          {sizes.map((size) => (
            <BaseBadge key={size} size={size}>
              Badge
            </BaseBadge>
          ))}
        </Section>

        <Section title="With icon">
          <BaseBadge color="success" variant="soft">
            <CheckIcon /> Verified
          </BaseBadge>
          <BaseBadge>
            <CheckIcon /> Done
          </BaseBadge>
        </Section>

        <Section title="As a link">
          <BaseBadge render={<a href="#" />} variant="outline" color="primary">
            Documentation
          </BaseBadge>
        </Section>
      </div>
    </Container>
  );
}

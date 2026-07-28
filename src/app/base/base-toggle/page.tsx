"use client";

import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { BaseToggle, Container, Typography } from "~/ui/components";
import { cn } from "~/ui/utils";

const variants: BaseToggle.Variant[] = ["default", "outline"];
const sizes: BaseToggle.Size[] = ["sm", "default", "lg"];

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

      <div className={cn("flex flex-wrap items-center gap-3", className)}>
        {children}
      </div>
    </div>
  );
};

const Row = ({ children }: { children?: React.ReactNode }) => {
  return <div className="flex flex-wrap items-center gap-2">{children}</div>;
};

export default function BaseTogglePage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BaseToggle" className="flex-col items-start">
          {variants.map((variant) => (
            <Row key={variant}>
              <BaseToggle variant={variant} aria-label="Toggle bold">
                <BoldIcon />
              </BaseToggle>
              <BaseToggle variant={variant} defaultPressed aria-label="Toggle italic">
                <ItalicIcon />
              </BaseToggle>
              <BaseToggle variant={variant} disabled aria-label="Toggle underline">
                <UnderlineIcon />
              </BaseToggle>
              <BaseToggle variant={variant}>Text</BaseToggle>
            </Row>
          ))}
        </Section>

        <Section title="Sizes">
          {sizes.map((size) => (
            <BaseToggle key={size} size={size} variant="outline" aria-label="Toggle bold">
              <BoldIcon />
            </BaseToggle>
          ))}
        </Section>
      </div>
    </Container>
  );
}

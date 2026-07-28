"use client";

import {
  BoldIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react";

import {
  BaseButton,
  BaseButtonGroup,
  Container,
  Typography,
} from "~/ui/components";
import { cn } from "~/ui/utils";

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

      <div className={cn("flex flex-wrap items-start gap-5", className)}>
        {children}
      </div>
    </div>
  );
};

const Row = ({ children }: { children?: React.ReactNode }) => {
  return <div className="flex flex-wrap gap-2">{children}</div>;
};

export default function BaseButtonGroupPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BaseButtonGroup">
          <BaseButtonGroup>
            <BaseButton variant="outline">Years</BaseButton>
            <BaseButton variant="outline">Months</BaseButton>
            <BaseButton variant="outline">Days</BaseButton>
          </BaseButtonGroup>
        </Section>

        <Section title="Icons">
          <BaseButtonGroup>
            <BaseButton variant="outline" size="icon">
              <BoldIcon />
            </BaseButton>
            <BaseButton variant="outline" size="icon">
              <ItalicIcon />
            </BaseButton>
            <BaseButton variant="outline" size="icon">
              <UnderlineIcon />
            </BaseButton>
          </BaseButtonGroup>

          <BaseButtonGroup>
            <BaseButton variant="outline" size="icon">
              <ChevronLeftIcon />
            </BaseButton>
            <BaseButton variant="outline" size="icon">
              <ChevronRightIcon />
            </BaseButton>
          </BaseButtonGroup>
        </Section>

        <Section title="Solid">
          <BaseButtonGroup>
            <BaseButton>One</BaseButton>
            <BaseButton>Two</BaseButton>
            <BaseButton>Three</BaseButton>
          </BaseButtonGroup>
        </Section>

        <Section title="Vertical">
          <BaseButtonGroup orientation="vertical">
            <BaseButton variant="outline">Top</BaseButton>
            <BaseButton variant="outline">Middle</BaseButton>
            <BaseButton variant="outline">Bottom</BaseButton>
          </BaseButtonGroup>
        </Section>
      </div>
    </Container>
  );
}

"use client";

import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react";

import {
  BaseToggle,
  BaseToggleGroup,
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

      <div className={cn("flex flex-wrap items-center gap-5", className)}>
        {children}
      </div>
    </div>
  );
};

const Row = ({ children }: { children?: React.ReactNode }) => {
  return <div className="flex flex-wrap items-center gap-2">{children}</div>;
};

export default function BaseToggleGroupPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="Multiple (text formatting)">
          <BaseToggleGroup multiple defaultValue={["bold"]}>
            <BaseToggle value="bold" variant="outline" aria-label="Bold">
              <BoldIcon />
            </BaseToggle>
            <BaseToggle value="italic" variant="outline" aria-label="Italic">
              <ItalicIcon />
            </BaseToggle>
            <BaseToggle
              value="underline"
              variant="outline"
              aria-label="Underline"
            >
              <UnderlineIcon />
            </BaseToggle>
          </BaseToggleGroup>
        </Section>

        <Section title="Single (alignment)">
          <BaseToggleGroup defaultValue={["left"]}>
            <BaseToggle value="left" aria-label="Align left">
              <AlignLeftIcon />
            </BaseToggle>
            <BaseToggle value="center" aria-label="Align center">
              <AlignCenterIcon />
            </BaseToggle>
            <BaseToggle value="right" aria-label="Align right">
              <AlignRightIcon />
            </BaseToggle>
          </BaseToggleGroup>
        </Section>

        <Section title="Vertical">
          <BaseToggleGroup orientation="vertical" defaultValue={["left"]}>
            <BaseToggle value="left" variant="outline" aria-label="Align left">
              <AlignLeftIcon />
            </BaseToggle>
            <BaseToggle
              value="center"
              variant="outline"
              aria-label="Align center"
            >
              <AlignCenterIcon />
            </BaseToggle>
            <BaseToggle value="right" variant="outline" aria-label="Align right">
              <AlignRightIcon />
            </BaseToggle>
          </BaseToggleGroup>
        </Section>
      </div>
    </Container>
  );
}

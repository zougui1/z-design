"use client";

import { BaseSlider, Container, Typography } from "~/ui/components";
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

      <div className={cn("flex flex-col gap-5", className)}>{children}</div>
    </div>
  );
};

const Row = ({ children }: { children?: React.ReactNode }) => {
  return <div className="flex flex-wrap gap-2">{children}</div>;
};

export default function BaseSliderPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BaseSlider">
          <BaseSlider.Root defaultValue={40} className="w-80">
            <div className="flex items-center justify-between">
              <BaseSlider.Label>Volume</BaseSlider.Label>
              <BaseSlider.Value />
            </div>
            <BaseSlider.Control>
              <BaseSlider.Track>
                <BaseSlider.Indicator />
                <BaseSlider.Thumb />
              </BaseSlider.Track>
            </BaseSlider.Control>
          </BaseSlider.Root>
        </Section>

        <Section title="Range">
          <BaseSlider.Root defaultValue={[25, 75]} className="w-80">
            <BaseSlider.Value />
            <BaseSlider.Control>
              <BaseSlider.Track>
                <BaseSlider.Indicator />
                <BaseSlider.Thumb index={0} />
                <BaseSlider.Thumb index={1} />
              </BaseSlider.Track>
            </BaseSlider.Control>
          </BaseSlider.Root>
        </Section>

        <Section title="Disabled">
          <BaseSlider.Root defaultValue={50} disabled className="w-80">
            <BaseSlider.Control>
              <BaseSlider.Track>
                <BaseSlider.Indicator />
                <BaseSlider.Thumb />
              </BaseSlider.Track>
            </BaseSlider.Control>
          </BaseSlider.Root>
        </Section>
      </div>
    </Container>
  );
}

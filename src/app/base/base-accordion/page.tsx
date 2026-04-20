import { BaseAccordion, Container, Typography } from "~/ui/components";
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

      <div className={cn("flex flex-wrap gap-5", className)}>{children}</div>
    </div>
  );
};

const Row = ({ children }: { children?: React.ReactNode }) => {
  return <div className="flex flex-wrap gap-2">{children}</div>;
};

export default function BaseAccordionPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BaseButton" className="flex-col">
          <BaseAccordion.Root>
            <BaseAccordion.Item>
              <BaseAccordion.Header>
                <BaseAccordion.Trigger>
                  What is Base UI?
                  <BaseAccordion.TriggerIcon />
                </BaseAccordion.Trigger>
              </BaseAccordion.Header>
              <BaseAccordion.Panel>
                Base UI is a library of high-quality unstyled React components
                for design systems and web apps.
              </BaseAccordion.Panel>
            </BaseAccordion.Item>
            <BaseAccordion.Item>
              <BaseAccordion.Header>
                <BaseAccordion.Trigger>
                  How do I get started?
                  <BaseAccordion.TriggerIcon />
                </BaseAccordion.Trigger>
              </BaseAccordion.Header>
              <BaseAccordion.Panel>
                Head to the “Quick start” guide in the docs. If you’ve used
                unstyled libraries before, you’ll feel at home.
              </BaseAccordion.Panel>
            </BaseAccordion.Item>
            <BaseAccordion.Item>
              <BaseAccordion.Header>
                <BaseAccordion.Trigger>
                  Can I use it for my project?
                  <BaseAccordion.TriggerIcon />
                </BaseAccordion.Trigger>
              </BaseAccordion.Header>
              <BaseAccordion.Panel>
                Of course! Base UI is free and open source.
              </BaseAccordion.Panel>
            </BaseAccordion.Item>
          </BaseAccordion.Root>
        </Section>
      </div>
    </Container>
  );
}

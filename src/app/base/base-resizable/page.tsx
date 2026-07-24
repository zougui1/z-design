"use client";

import { BaseResizable, Container, Typography } from "~/ui/components";
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

const Pane = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex h-full items-center justify-center p-6 text-sm font-medium">
      {children}
    </div>
  );
};

export default function BaseResizablePage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="Horizontal">
          <BaseResizable.Group className="h-48 rounded-lg border">
            <BaseResizable.Panel defaultSize="30">
              <Pane>Sidebar</Pane>
            </BaseResizable.Panel>
            <BaseResizable.Handle />
            <BaseResizable.Panel>
              <Pane>Content</Pane>
            </BaseResizable.Panel>
          </BaseResizable.Group>
        </Section>

        <Section title="Vertical + nested">
          <BaseResizable.Group
            orientation="vertical"
            className="h-72 rounded-lg border"
          >
            <BaseResizable.Panel defaultSize="40">
              <Pane>Header</Pane>
            </BaseResizable.Panel>
            <BaseResizable.Handle />
            <BaseResizable.Panel>
              <BaseResizable.Group>
                <BaseResizable.Panel>
                  <Pane>Left</Pane>
                </BaseResizable.Panel>
                <BaseResizable.Handle />
                <BaseResizable.Panel>
                  <Pane>Right</Pane>
                </BaseResizable.Panel>
              </BaseResizable.Group>
            </BaseResizable.Panel>
          </BaseResizable.Group>
        </Section>
      </div>
    </Container>
  );
}

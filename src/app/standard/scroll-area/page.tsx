"use client";

import { ScrollArea, Container, Typography } from "~/ui/components";

const Section = ({
  title,
  children,
}: {
  title?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-4">
      {title && <Typography.H2>{title}</Typography.H2>}
      {children}
    </div>
  );
};

const tags = Array.from({ length: 40 }, (_, i) => `Item ${i + 1}`);

export default function ScrollAreaPage() {
  return (
    <Container>
      <div className="flex flex-col gap-10">
        <Section title="Vertical">
          <ScrollArea
            orientation="vertical"
            className="border-border h-64 w-72 rounded-md border"
          >
            <div className="flex flex-col gap-2 p-4">
              {tags.map((tag) => (
                <div key={tag} className="text-sm">
                  {tag}
                </div>
              ))}
            </div>
          </ScrollArea>
        </Section>

        <Section title="Both axes (shadows follow the scroll)">
          <ScrollArea className="border-border h-64 w-96 rounded-md border">
            <div className="grid w-[900px] grid-cols-6 gap-2 p-4">
              {Array.from({ length: 90 }, (_, i) => (
                <div
                  key={i}
                  className="bg-accent flex h-16 items-center justify-center rounded-md text-sm"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </ScrollArea>
        </Section>
      </div>
    </Container>
  );
}

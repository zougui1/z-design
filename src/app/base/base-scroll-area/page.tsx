"use client";

import { BaseScrollArea, Container, Typography } from "~/ui/components/base";

export default function BaseScrollAreaPage() {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <Typography.H2>BaseScrollArea</Typography.H2>
        <Typography.Muted>
          base-ui scroll-area primitives with edge shadows (background-colored)
          that appear on whichever edge has more content to scroll to.
        </Typography.Muted>

        <BaseScrollArea.Root className="border-border h-64 w-96 rounded-md border">
          <BaseScrollArea.Viewport>
            <BaseScrollArea.Content>
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
            </BaseScrollArea.Content>
          </BaseScrollArea.Viewport>

          <BaseScrollArea.Scrollbar orientation="vertical">
            <BaseScrollArea.Thumb />
          </BaseScrollArea.Scrollbar>
          <BaseScrollArea.Scrollbar orientation="horizontal">
            <BaseScrollArea.Thumb />
          </BaseScrollArea.Scrollbar>
          <BaseScrollArea.Corner />

          <BaseScrollArea.Shadows />
        </BaseScrollArea.Root>
      </div>
    </Container>
  );
}

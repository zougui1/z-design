"use client";

import { BaseContextMenu, Container, Typography } from "~/ui/components";
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

export default function BaseContextMenuPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BaseContextMenu">
          <BaseContextMenu.Root>
            <BaseContextMenu.Trigger
              className="border-border text-muted-foreground flex h-40 w-80
                items-center justify-center rounded-lg border border-dashed
                text-sm"
            >
              Right click here
            </BaseContextMenu.Trigger>

            <BaseContextMenu.Portal>
              <BaseContextMenu.Positioner>
                <BaseContextMenu.Popup>
                  <BaseContextMenu.Item>
                    Back
                    <BaseContextMenu.Shortcut>⌘[</BaseContextMenu.Shortcut>
                  </BaseContextMenu.Item>
                  <BaseContextMenu.Item>
                    Forward
                    <BaseContextMenu.Shortcut>⌘]</BaseContextMenu.Shortcut>
                  </BaseContextMenu.Item>
                  <BaseContextMenu.Item>Reload</BaseContextMenu.Item>
                  <BaseContextMenu.Separator />
                  <BaseContextMenu.Group>
                    <BaseContextMenu.GroupLabel>
                      Share
                    </BaseContextMenu.GroupLabel>
                    <BaseContextMenu.Item>Copy link</BaseContextMenu.Item>
                    <BaseContextMenu.Item disabled>
                      Email (disabled)
                    </BaseContextMenu.Item>
                  </BaseContextMenu.Group>
                </BaseContextMenu.Popup>
              </BaseContextMenu.Positioner>
            </BaseContextMenu.Portal>
          </BaseContextMenu.Root>
        </Section>
      </div>
    </Container>
  );
}

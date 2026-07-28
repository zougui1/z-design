"use client";

import {
  BaseMenu,
  BaseMenubar,
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

      <div className={cn("flex flex-wrap gap-5", className)}>{children}</div>
    </div>
  );
};

const Row = ({ children }: { children?: React.ReactNode }) => {
  return <div className="flex flex-wrap gap-2">{children}</div>;
};

const Menu = ({
  label,
  children,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <BaseMenu.Root>
      <BaseMenubar.Trigger>{label}</BaseMenubar.Trigger>
      <BaseMenu.Portal>
        <BaseMenu.Positioner sideOffset={6} align="start">
          <BaseMenu.Popup>{children}</BaseMenu.Popup>
        </BaseMenu.Positioner>
      </BaseMenu.Portal>
    </BaseMenu.Root>
  );
};

export default function BaseMenubarPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BaseMenubar">
          <BaseMenubar.Root>
            <Menu label="File">
              <BaseMenu.Item>
                New Tab
                <BaseMenu.Shortcut>⌘T</BaseMenu.Shortcut>
              </BaseMenu.Item>
              <BaseMenu.Item>
                New Window
                <BaseMenu.Shortcut>⌘N</BaseMenu.Shortcut>
              </BaseMenu.Item>
              <BaseMenu.Separator />
              <BaseMenu.Item>
                Print
                <BaseMenu.Shortcut>⌘P</BaseMenu.Shortcut>
              </BaseMenu.Item>
            </Menu>

            <Menu label="Edit">
              <BaseMenu.Item>Undo</BaseMenu.Item>
              <BaseMenu.Item>Redo</BaseMenu.Item>
              <BaseMenu.Separator />
              <BaseMenu.Item>Cut</BaseMenu.Item>
              <BaseMenu.Item>Copy</BaseMenu.Item>
              <BaseMenu.Item>Paste</BaseMenu.Item>
            </Menu>

            <Menu label="View">
              <BaseMenu.Item>Reload</BaseMenu.Item>
              <BaseMenu.Item disabled>Force Reload</BaseMenu.Item>
              <BaseMenu.Item>Toggle Fullscreen</BaseMenu.Item>
            </Menu>
          </BaseMenubar.Root>
        </Section>
      </div>
    </Container>
  );
}

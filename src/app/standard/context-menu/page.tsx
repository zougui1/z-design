"use client";

import { useState } from "react";

import {
  Container,
  ContextMenu,
  type MenuItem,
  Typography,
} from "~/ui/components";

export default function ContextMenuPage() {
  const [last, setLast] = useState<string | null>(null);

  const items: MenuItem[] = [
    { label: "Back", shortcut: "⌘[", onClick: () => setLast("Back") },
    { label: "Forward", shortcut: "⌘]", onClick: () => setLast("Forward") },
    { label: "Reload", shortcut: "⌘R", onClick: () => setLast("Reload") },
    { separator: true },
    { groupLabel: "Share" },
    { label: "Copy link", onClick: () => setLast("Copy link") },
    { label: "Open docs", href: "https://base-ui.com", target: "_blank" },
    { label: "Email (disabled)", disabled: true },
  ];

  return (
    <Container>
      <div className="flex flex-col gap-4">
        <Typography.H2>Context Menu</Typography.H2>
        <ContextMenu items={items}>
          <div
            className="border-border text-muted-foreground flex h-40 w-80
              items-center justify-center rounded-lg border border-dashed text-sm"
          >
            Right click here
          </div>
        </ContextMenu>
        {last && (
          <p className="text-muted-foreground text-sm">Last action: {last}</p>
        )}
      </div>
    </Container>
  );
}

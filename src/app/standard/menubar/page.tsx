"use client";

import { useState } from "react";

import {
  Container,
  Menubar,
  type MenubarMenu,
  Typography,
} from "~/ui/components";

export default function MenubarPage() {
  const [last, setLast] = useState<string | null>(null);

  const menus: MenubarMenu[] = [
    {
      label: "File",
      items: [
        { label: "New Tab", shortcut: "⌘T", onClick: () => setLast("New Tab") },
        { label: "New Window", shortcut: "⌘N", onClick: () => setLast("New Window") },
        { separator: true },
        { label: "Print", shortcut: "⌘P", onClick: () => setLast("Print") },
      ],
    },
    {
      label: "Edit",
      items: [
        { groupLabel: "History" },
        { label: "Undo", shortcut: "⌘Z", onClick: () => setLast("Undo") },
        { label: "Redo", shortcut: "⇧⌘Z", onClick: () => setLast("Redo") },
        { separator: true },
        { label: "Cut", onClick: () => setLast("Cut") },
        { label: "Copy", onClick: () => setLast("Copy") },
        { label: "Paste", onClick: () => setLast("Paste") },
      ],
    },
    {
      label: "View",
      items: [
        { label: "Reload", onClick: () => setLast("Reload") },
        { label: "Force Reload", disabled: true },
        { label: "Toggle Fullscreen", onClick: () => setLast("Toggle Fullscreen") },
      ],
    },
  ];

  return (
    <Container>
      <div className="flex flex-col gap-4">
        <Typography.H2>Menubar</Typography.H2>
        <Menubar menus={menus} />
        {last && (
          <p className="text-muted-foreground text-sm">Last action: {last}</p>
        )}
      </div>
    </Container>
  );
}

"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { Container, Menu, type MenuItem, Typography } from "~/ui/components";

export default function MenuPage() {
  const [selected, setSelected] = useState<string | null>(null);

  const items: MenuItem[] = [
    { groupLabel: "My Account" },
    { label: "Profile", shortcut: "⇧⌘P", onClick: () => setSelected("Profile") },
    { label: "Billing", shortcut: "⌘B", onClick: () => setSelected("Billing") },
    { label: "Settings", shortcut: "⌘S", onClick: () => setSelected("Settings") },
    { separator: true },
    { label: "Log out", shortcut: "⇧⌘Q", onClick: () => setSelected("Log out") },
    { label: "API (disabled)", disabled: true },
  ];

  return (
    <Container>
      <div className="flex flex-col gap-4">
        <Typography.H2>Menu</Typography.H2>
        <Menu
          trigger={
            <>
              Open <ChevronDown className="-mr-1" />
            </>
          }
          items={items}
        />
        {selected && (
          <p className="text-muted-foreground text-sm">Selected: {selected}</p>
        )}
      </div>
    </Container>
  );
}

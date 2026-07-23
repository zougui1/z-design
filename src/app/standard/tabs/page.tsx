"use client";

import { Bell, CreditCard, User } from "lucide-react";

import { Tabs, type TabItem } from "~/ui/components";
import { Container, Typography } from "~/ui/components/base";

const items: TabItem[] = [
  {
    value: "account",
    label: "Account",
    icon: <User />,
    content: (
      <p className="text-muted-foreground text-sm">
        Manage your account details and profile information.
      </p>
    ),
  },
  {
    value: "billing",
    label: "Billing",
    icon: <CreditCard />,
    content: (
      <p className="text-muted-foreground text-sm">
        Update your payment method and view invoices.
      </p>
    ),
  },
  {
    value: "notifications",
    label: "Notifications",
    icon: <Bell />,
    content: (
      <p className="text-muted-foreground text-sm">
        Choose what you want to be notified about.
      </p>
    ),
    disabled: true,
  },
];

export default function TabsPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2>Tabs</Typography.H2>
          <Tabs defaultValue="account" items={items} className="w-96" />
        </div>
      </div>
    </Container>
  );
}

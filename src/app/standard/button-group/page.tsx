"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import {
  Button,
  ButtonGroup,
  type ButtonGroupItem,
  Container,
  Typography,
} from "~/ui/components";

export default function ButtonGroupPage() {
  const items: ButtonGroupItem[] = [
    { label: "Years", variant: "outline" },
    { label: "Months", variant: "outline" },
    { label: "Days", variant: "outline" },
  ];

  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2>Button Group</Typography.H2>
          <ButtonGroup items={items} />
        </div>

        <div className="flex flex-col gap-4">
          <Typography.H2>With children</Typography.H2>
          <ButtonGroup>
            <Button variant="outline" size="icon">
              <ChevronLeftIcon />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRightIcon />
            </Button>
          </ButtonGroup>
        </div>

        <div className="flex flex-col gap-4">
          <Typography.H2>Vertical</Typography.H2>
          <ButtonGroup orientation="vertical">
            <Button variant="outline">Top</Button>
            <Button variant="outline">Middle</Button>
            <Button variant="outline">Bottom</Button>
          </ButtonGroup>
        </div>
      </div>
    </Container>
  );
}

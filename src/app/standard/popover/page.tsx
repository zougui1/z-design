"use client";

import { useState } from "react";

import { Button, Container, Popover, Typography } from "~/ui/components";

export default function PopoverPage() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2>Popover</Typography.H2>
          <Popover
            trigger="Notifications"
            title="Notifications"
            description="Choose how you want to be notified."
            slotProps={{ trigger: { variant: "outline" } }}
          />
        </div>

        <div className="flex flex-col gap-4">
          <Typography.H2>Sides</Typography.H2>
          <div className="flex flex-wrap gap-5">
            {(["left", "top", "bottom", "right"] as const).map((side) => (
              <Popover
                key={side}
                side={side}
                trigger={side}
                title="Dimensions"
                description="Set the dimensions for the layer."
                slotProps={{ trigger: { variant: "outline", className: "capitalize" } }}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Typography.H2>Controlled with footer</Typography.H2>
          <Popover
            open={open}
            onOpenChange={setOpen}
            trigger="Edit dimensions"
            title="Dimensions"
            description="Set the dimensions for the layer."
            footer={
              <>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setOpen(false)}>Save</Button>
              </>
            }
          />
        </div>
      </div>
    </Container>
  );
}

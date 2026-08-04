"use client";

import { useState } from "react";

import { Button, Container, Dialog, Typography } from "~/ui/components";

export default function DialogPage() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <div className="flex flex-col gap-4">
        <Typography.H2>Dialog</Typography.H2>
        <Dialog
          open={open}
          onOpenChange={setOpen}
          trigger={<Button>Discard draft</Button>}
          title="Discard draft?"
          description="You can’t undo this action."
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Discard</Button>
            </>
          }
        />
      </div>
    </Container>
  );
}

"use client";

import { Button, Toaster, toast, Container, Typography } from "~/ui/components";

export default function ToastPage() {
  return (
    <Container>
      <Toaster />

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2>Toast</Typography.H2>

          <div className="flex flex-wrap gap-2">
            <Button
              color="neutral"
              variant="outline"
              onClick={() =>
                toast.add({
                  title: "Saved",
                  description: "Your changes have been saved.",
                })
              }
            >
              Default
            </Button>

            <Button
              color="success"
              onClick={() =>
                toast.success({
                  title: "Success",
                  description: "Everything went through.",
                })
              }
            >
              Success
            </Button>

            <Button
              color="destructive"
              onClick={() =>
                toast.error({
                  title: "Something went wrong",
                  description: "Please try again.",
                })
              }
            >
              Error
            </Button>

            <Button
              color="warning"
              onClick={() =>
                toast.warning({
                  title: "Heads up",
                  description: "This action can't be undone.",
                })
              }
            >
              Warning
            </Button>

            <Button
              color="primary"
              onClick={() =>
                toast.info({ title: "Did you know?", description: "Tips live here." })
              }
            >
              Info
            </Button>

            <Button
              color="neutral"
              variant="ghost"
              onClick={() =>
                toast.promise(
                  new Promise((resolve) => setTimeout(resolve, 2000)),
                  {
                    loading: "Uploading…",
                    success: { title: "Uploaded" },
                    error: { title: "Upload failed" },
                  },
                )
              }
            >
              Promise
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

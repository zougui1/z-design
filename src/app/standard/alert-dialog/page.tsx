import { AlertDialog, Container, Typography } from "~/ui/components";

export default function AlertDialogPage() {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <Typography.H2>AlertDialog</Typography.H2>
        <AlertDialog
          trigger="Delete account"
          title="Are you absolutely sure?"
          description="This action cannot be undone. This will permanently delete your account."
          actionLabel="Delete"
        />
      </div>
    </Container>
  );
}

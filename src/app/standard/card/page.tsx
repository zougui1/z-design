import { Button, Card, Container, Typography } from "~/ui/components";

export default function CardPage() {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <Typography.H2>Card</Typography.H2>
        <Card
          className="w-full max-w-sm"
          title="Notifications"
          description="You have 3 unread messages."
          action={<Button variant="link">Mark all read</Button>}
          footer={
            <Button variant="outline" className="w-full">
              Dismiss
            </Button>
          }
        >
          <p className="text-sm">
            A set of beautifully designed components that you can customize,
            extend, and build on.
          </p>
        </Card>
      </div>
    </Container>
  );
}

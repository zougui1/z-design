import { BaseTextarea, Container } from "~/ui/components";

export default function BaseTextareaPage() {
  return (
    <Container className="space-y-4">
      <BaseTextarea placeholder="Enter text" />
      <BaseTextarea disabled placeholder="Enter text" />
      <BaseTextarea aria-invalid placeholder="Enter text" />
    </Container>
  );
}

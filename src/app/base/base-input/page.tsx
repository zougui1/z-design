import { BaseInput, Container } from "~/ui/components";

export default function BaseInputPage() {
  return (
    <Container className="space-y-4">
      <BaseInput placeholder="Enter text" />
      <BaseInput disabled placeholder="Enter text" />
      <BaseInput aria-invalid placeholder="Enter text" />
    </Container>
  );
}

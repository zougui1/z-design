import { Container, Checkbox } from "~/ui/components";

export default function HomePage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex gap-4">
          <Checkbox defaultChecked />
          <Checkbox defaultChecked={false} />
          <Checkbox indeterminate />
        </div>

        <div className="flex gap-4">
          <Checkbox aria-invalid defaultChecked />
          <Checkbox aria-invalid defaultChecked={false} />
          <Checkbox aria-invalid indeterminate />
        </div>

        <div className="flex gap-4">
          <Checkbox disabled defaultChecked />
          <Checkbox disabled defaultChecked={false} />
          <Checkbox disabled indeterminate />
        </div>
      </div>
    </Container>
  );
}

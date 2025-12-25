import { Container, Switch } from "~/ui/components";

export default function HomePage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex gap-4">
          <Switch defaultChecked />
          <Switch defaultChecked={false} />
        </div>

        <div className="flex gap-4">
          <Switch disabled defaultChecked />
          <Switch disabled defaultChecked={false} />
        </div>
      </div>
    </Container>
  );
}

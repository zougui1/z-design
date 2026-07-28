import { Collapsible, Container, Typography } from "~/ui/components";

export default function CollapsiblePage() {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <Typography.H2>Collapsible</Typography.H2>
        <Collapsible trigger="Recovery keys" defaultOpen className="w-56">
          <div className="flex flex-col gap-2 pt-2 pl-7 text-sm">
            <div>alien-bean-pasta</div>
            <div>wild-irish-burrito</div>
            <div>horse-battery-staple</div>
          </div>
        </Collapsible>
      </div>
    </Container>
  );
}
